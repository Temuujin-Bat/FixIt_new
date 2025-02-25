import bcrypt from "bcrypt";

const hashPassword=async (password:string)=>{
  return await bcrypt.hash(password, 10);
}

const validatePassword=async (inputPassword:string, hashedPassword:string)=>{
  return await bcrypt.compare(inputPassword, hashedPassword);
}

export { hashPassword, validatePassword };
