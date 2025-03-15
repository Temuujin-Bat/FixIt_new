// Components
import { Dashboard } from "../features/dashboard";

// Hooks
import { useGetAllBarbershopsAPI } from "../hooks/API/barbershops";

const DashboardPage = () => {
  const { isPending } = useGetAllBarbershopsAPI();

  if (isPending) {
    return <h1>Pending...</h1>;
  }

  return <Dashboard />;
};

export default DashboardPage;
