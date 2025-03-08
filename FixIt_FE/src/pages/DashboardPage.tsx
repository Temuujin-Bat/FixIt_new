// Components
import { Dashboard } from "../features/dashboard";
import { useGetAllBarbershopsAPI } from "../hooks/API/barbershops";

const DashboardPage = () => {
  useGetAllBarbershopsAPI();

  return <Dashboard />;
};

export default DashboardPage;
