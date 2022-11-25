import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { getDate } from "../../../../commons/libraries/utils";
import { successModal } from "../../../commons/modal/modal-function";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentList from "./BoardCommentList.container";

export default function BoardCommentListItemUI(
  props: IBoardCommentListUIItemProps
) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => {
          <BoardCommentList key={el._id} el={el} />;
        })}
        {!props.isEdit && (
          <S.ItemWrapper>
            <S.FlexWrapper>
              <S.Avatar src="/writer.png" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el?.writer}</S.Writer>
                  <S.Star value={props.el?.rating} disabled />
                </S.WriterWrapper>
                <S.Contents>{props.el?.contents}</S.Contents>
              </S.MainWrapper>
              <S.OptionWrapper>
                <S.UpdateIcon
                  src="/cmtEdit.png/"
                  onClick={props.onClickUpdate}
                />
                <S.DeleteIcon
                  src="/cmtDlt.png/"
                  onClick={props.onClickDelete}
                />
              </S.OptionWrapper>
            </S.FlexWrapper>
            <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
          </S.ItemWrapper>
        )}
        {props.isEdit && (
          <BoardCommentWrite
            isEdit={true}
            setIsEdit={props.setIsEdit}
            el={props.el}
          />
        )}
      </InfiniteScroll>
    </>
  );
}
