export function useValidation() {
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const comparePasswords = (newPassword: string, confirmPassword: string) => {
    return newPassword === confirmPassword;
  };

  return { validatePassword, comparePasswords };
}
