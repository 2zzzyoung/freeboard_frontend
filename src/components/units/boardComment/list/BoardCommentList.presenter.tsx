import BoardCommentWrite from "../write/BoardCommentWrite.container";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentList from "./BoardCommentList.container";

export default function BoardCommentListItemUI(
  props: IBoardCommentListUIItemProps
) {
  return (
    <>
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
              <S.UpdateIcon src="/cmtEdit.png/" onClick={props.onClickUpdate} />
              <S.DeleteIcon
                src="/cmtDlt.png/"
                id={props.el.id}
                onClick={props.onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(new Date(props.el?.createdAt))}</S.DateString>
        </S.ItemWrapper>
      )}
      {props.isEdit && (
        <BoardCommentWrite
          isEdit={true}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
