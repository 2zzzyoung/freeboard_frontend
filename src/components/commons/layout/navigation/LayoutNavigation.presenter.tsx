import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
// import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "중고마켓", page: "/products/list" },
  { name: "자유게시판", page: "/boards" },
  { name: "인테리어", page: "/" },
  { name: "마이페이지", page: "/" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
