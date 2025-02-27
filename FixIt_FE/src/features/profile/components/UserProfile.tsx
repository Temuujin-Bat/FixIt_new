// Components
import { AddBusiness, Appointments, Edit, Favourites, Logout } from '../components';

const UserProfile = () => {
  return (
    <>
      <Edit />

      <Favourites />
      <Appointments />
      <AddBusiness />

      <Logout />
    </>
  );
};

export { UserProfile };