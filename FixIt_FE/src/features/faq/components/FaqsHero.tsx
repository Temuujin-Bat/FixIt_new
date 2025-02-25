// @mui
import { styled } from '@mui/material/styles';
import {Container, Typography} from '@mui/material';
// components

const StyledRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/overlay_1.svg), url(/assets/FAQ/airsoftFaq.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 280,
    padding: 0,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    bottom: 80,
    textAlign: 'left',
    position: 'absolute',
  },
}));


const FaqsHero = () => {
  return (
    <StyledRoot>
      <Container>
        <StyledContent>
          <div>
            <Typography color="primary" variant="h2">מרכז המידע של איירסופט ישראל</Typography>
          </div>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}

export {
  FaqsHero
}
