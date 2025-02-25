// Third party
import CryptoJS from "crypto-js";

// Components
import { TOKEN_KEY } from "../../config";

const encryptData = (name: string, token: string, storage = "localStorage") => {
  const encrypted = CryptoJS.AES.encrypt(token, TOKEN_KEY).toString();

  if (storage === "localStorage") {
    localStorage.setItem(name, encrypted);
  } else {
    sessionStorage.setItem(name, encrypted);
  }
};

const decryptData = (name: string, storage = "localStorage") => {
  let encrypted = "";

  if (storage === "localStorage") {
    encrypted = localStorage.getItem(name) || "";
  } else {
    encrypted = sessionStorage.getItem(name) || "";
  }

  if (!encrypted) return null;

  const decrypted = CryptoJS.AES.decrypt(encrypted, TOKEN_KEY).toString(
    CryptoJS.enc.Utf8
  );

  if (decrypted) {
    return decrypted;
  }

  return "";
};

export { encryptData, decryptData };
