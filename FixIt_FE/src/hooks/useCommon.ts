// Third party
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Components
import { persist } from '../store';

export function useCommon() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await persist.purge();
    queryClient.removeQueries();
    localStorage.clear();
    navigate('/');
  };

  return {
    handleLogout,
  };
}


