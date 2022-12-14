import { atom } from "recoil";

export const isEditData = atom({
  key: "isEditData",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const refetch = atom({
  key: "refetch",
  default: 0,
});
