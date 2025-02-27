// Components
import { getLocalValue } from '../utils/storage';

export function useAuth() {
  const getPhone = () => {
    return getLocalValue('phone');
  };

  const isLoggedIn = (): boolean => {
    const phone = getPhone();
    return !!phone;
  };

  return {
    isLoggedIn,
  };
}
