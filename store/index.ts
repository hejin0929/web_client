import { createContext } from "react";
import { atom, useRecoilState } from "recoil";
import { GetApiV1UsersResponse } from "@/pages/api";

export const store = new (class Stores {})();

export const textState = atom<GetApiV1UsersResponse["data"] | undefined>({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const useUsers = () => useRecoilState(textState);

export default createContext(store);
