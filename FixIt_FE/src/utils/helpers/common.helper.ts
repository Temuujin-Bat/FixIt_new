import * as forge from "node-forge";

const hashPassword = (password: string): string => {
  const md = forge.md.sha512.create();

  md.update(password);

  return md.digest().toHex();
};

export { hashPassword };
