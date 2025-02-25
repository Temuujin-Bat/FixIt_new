import { ReactNode } from "react";

// Third party
import { Navigate } from "react-router-dom";

// Hooks
import { useAuthentication } from "../hooks/useAuthenticate";

export default function AuthRedirect({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuthentication();

  if (!!isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return children;
}
