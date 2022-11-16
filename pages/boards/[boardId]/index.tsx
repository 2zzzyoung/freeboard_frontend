import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.presenter";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentList />
    </>
  );
}
