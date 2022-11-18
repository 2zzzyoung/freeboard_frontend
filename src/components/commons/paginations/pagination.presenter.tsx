import { Page } from "./pagination.styles";
import { IPaginationUIProps } from "./pagination.types";
import { SwapLeftOutlined } from "@ant-design/icons";
import { SwapRightOutlined } from "@ant-design/icons";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>
        <SwapLeftOutlined />
      </Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>
        <SwapRightOutlined />
      </Page>
    </div>
  );
}
