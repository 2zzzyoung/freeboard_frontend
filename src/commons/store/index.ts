import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

//

export const MapAddressState = atom({
  key: "MapAddressState",
  default: "",
});

export const MapLatState = atom({
  key: "MapLatState",
  default: "",
});

export const MapLngState = atom({
  key: "MapLangState",
  default: "",
});

export const productDatas = atom({
  key: "productDatas",
  default: "",
});
