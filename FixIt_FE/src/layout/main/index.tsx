// Third party
import { Outlet, } from 'react-router-dom';

// MUI
import { styled } from '@mui/system';

// Components
import { ApplicationBar } from './Bar';

const MainStyled = styled('main')(() => ({
  width: '100%',
  flexGrow: 1,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MainLayout = () => {
  return (
    <>
      <ApplicationBar />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </>
  );
};

export { MainLayout };
