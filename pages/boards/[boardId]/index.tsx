import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

const BoardDetailPage = () => {
  return (
    <>
      <BoardDetail />
    </>
  );
};

export default withAuth(BoardDetailPage);
