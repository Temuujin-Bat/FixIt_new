import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { BaseContainer } from "../components";
import { Privacy } from "../features/privacy";
import {useMemo} from "react";
import {useQueryParams} from "../hooks/useCommon";

const PrivacyPage = () => {
  const theme = useTheme();
  const query = useQueryParams()

  const privacyData = useMemo(() => {
    const isStore = query.get('type') === 'store'

    return {
      title: isStore ? 'תקנון חנות' : 'תקנון אתר',
      lastModified: 2024
    }
  }, [query])

  return (
      <BaseContainer>
        <Box boxShadow={4} borderRadius={2}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <BaseContainer paddingX={{ xs: 2, sm: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                {privacyData.title}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                }}
              >
               עדכון אחרון:
                {' '}
                <strong> {privacyData.lastModified}</strong>
              </Typography>
            </BaseContainer>
            <Box
              component="svg"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
              width={1}
              marginBottom={-1}
            >
              <path
                fill={theme.palette.background.paper}
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              />
            </Box>
          </Box>
          <BaseContainer
            paddingTop="0 !important"
            paddingX={{ xs: 2, sm: 4 }}
            position="relative"
            top={0}
          >
            <Box
              component={Grid}
              container
              spacing={4}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
            >
              <Grid item xs={12} md={9}>
                <Privacy />
              </Grid>
            </Box>
          </BaseContainer>
        </Box>
      </BaseContainer>
  );
};

export default PrivacyPage;
