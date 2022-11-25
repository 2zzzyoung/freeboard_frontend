import { Searchbar, SearchbarInput, SearchBtn } from "./searchbar.styles";
import { ISearchbarUIProps } from "./searchbar.types";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
      <SearchBtn>
        <SearchOutlined />
      </SearchBtn>
    </Searchbar>
  );
}
