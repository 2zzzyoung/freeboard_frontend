import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./write.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./writer.queries";
// import { IEnrollProps, IFormData } from "./productWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Myyup } from "./write.schema";
// import { checkValidationFile } from "../../../commons/validation/validationFile";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { MapAddressState } from "../../../../commons/store";
import {
  errorModal,
  successModal,
} from "../../../commons/modal/modal-function";
import { FETCH_USED_ITEM } from "../detail/detail.queries";

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    // resolver: yupResolver(Myyup),
    mode: "onChange",
  });
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [MapAddress, setMapAddress] = useRecoilState(MapAddressState);

  const [createUsedItem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [updateUsedItem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  const onClickaddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setMapAddress(data.address);
    setIsOpen((prev) => !prev);
    setValue("useditemAddress.address", data.address);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onClickMapSearch = () => {
    setIsMapOpen((prev) => !prev);
  };

  const onClickMapCancel = () => {
    setIsMapOpen(false);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value);
  };

  useEffect(() => {}, [MapAddress]);

  const onSubmitWrite = async (data: IFormData) => {
    try {
      data.price = Number(data.price);
      data.images = imgUrl;
      data.useditemAddress.lat = 0;
      data.useditemAddress.lng = 0;
      const result = await createUsedItem({
        variables: {
          createUseditemInput: data,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("상품이 등록되었습니다");
      void router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
    }
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      //   const isValid = checkValidationFile(file);
      //   if (!isValid) return;
      try {
        const result = await uploadFile({ variables: { file } });
        const newImgUrls = [...imgUrl];
        newImgUrls[index] = result.data?.uploadFile.url;
        setImgUrl(newImgUrls);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    };

  const onClickEdit = async (data: IFormData) => {
    try {
      console.log(typeof Number(data.price));
      data.price = Number(data.price);
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: data,
          useditemId: String(router.query.productId),
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      void router.push(`/products/${result?.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <ProductWriteUI
      isOpen={isOpen}
      onSubmitWrite={onSubmitWrite}
      register={register}
      handleSubmit={handleSubmit}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickaddressSearch={onClickaddressSearch}
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      formState={formState}
      isMapOpen={isMapOpen}
      onClickMapSearch={onClickMapSearch}
      onClickMapCancel={onClickMapCancel}
      MapAddress={MapAddress}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={data}
      onChangeContents={onChangeContents}
      setValue={setValue}
    />
  );
}
