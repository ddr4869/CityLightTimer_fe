import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const breadcrumbState = atom({
  key: "breadcrumbState",
  default: "main",
});
