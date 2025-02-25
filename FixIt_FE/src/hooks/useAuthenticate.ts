// Components
import { decryptData } from "../utils/crypto_util";
import { TOKEN_KEY } from "../data/constants";

export function useAuthentication() {
  const getToken = () => {
    let token = decryptData(TOKEN_KEY, "localStorage");

    return token;
  };

  const isLoggedIn = (): boolean => {
    const token = getToken();

    return !!token;
  };

  return { isLoggedIn, getToken };
}
