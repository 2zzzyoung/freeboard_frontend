import { ChangeEvent } from "react";
import { ISearchbarProps } from "./searchbar.types";
import _ from "lodash";
import SearchbarUI from "./searchbar.presenter";

export default function Searchbar(props: ISearchbarProps) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchbarUI onChangeSearchbar={onChangeSearchbar} />;
}
