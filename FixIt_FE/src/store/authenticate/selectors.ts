import { useSelector } from "react-redux";
import { RootState } from "./type";

export function getUserData() {
  const { userInfo } = useSelector(
    (state: RootState) => state.authenticateReducer
  );

  return { userInfo };
}
