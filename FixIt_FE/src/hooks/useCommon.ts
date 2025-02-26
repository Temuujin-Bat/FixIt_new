// Third party
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// import { persistor } from "../store";

export function useCommon() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await persistor.purge();
    queryClient.removeQueries();
    localStorage.clear();
    navigate('/');
  };

  return {
    handleLogout,
  };
}


