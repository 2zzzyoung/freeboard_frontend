import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  UPDATE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { successModal } from "../../../commons/modal/modal-function";
import {
  IMutation,
  IMutationUpdateBoardArgs,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  const onClickList = () => {
    router.push("/boards");
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    successModal("삭제가 완료되었습니다.");
    router.push("/boards");
  };

  const onClickLikeBoard = async () => {
    await likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislikeBoard = async () => {
    await dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  // const onClickCommentSubmit = async () => {
  //   if (!writer || !password || !contents) {
  //     successModal("모두 작성해주세요.");
  //   } else {
  //     try {
  //       await createBoardComment({
  //         variables: {
  //           boardId: router.query.id,
  //           createBoardCommentInput: {
  //             writer,
  //             contents,
  //           },
  //         },
  //         refetchQueries: [
  //           {
  //             query: FETCH_COMMENT,
  //             variables: {
  //               boardId: router.query.id,
  //             },
  //           },
  //         ],
  //       });
  //       setWriter("");
  //       setPassword("");
  //       setContents("");
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }
  // };
  // const onClickCommentEdit = () => {};
  // const onClickCommentDelete = () => {};

  return (
    <BoardDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickLikeBoard={onClickLikeBoard}
      onClickDislikeBoard={onClickDislikeBoard}
      data={data}
    />
  );
}
