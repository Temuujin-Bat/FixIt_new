// MUI
import { Avatar, Box, Chip, Paper, Stack, Typography } from '@mui/material';

// Components
import { ITechnicianProvider } from '../type';

export default function TechniciansCard({
  technician,
  index,
}: {
  technician: ITechnicianProvider;
  index: number;
}) {
  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          background: gradients[index % gradients.length],
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 4,
          paddingY: 2,
        }}
      >
        <Box>
          <Typography variant="h6" color={'common.white'}>
            {technician.title}
          </Typography>
          <Typography variant="body2" color="common.white">
            {technician.description}
          </Typography>

          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  color: 'common.black',
                },
              }}
              component="a"
              href={`tel:${technician.contactPhone}`}
            >
              {technician.contactPhone}
            </Typography>

            {technician?.contactEmail && (
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {technician.contactEmail}
              </Typography>
            )}
          </Stack>
        </Box>

        <Avatar
          src={technician.picUrl}
          alt={technician.title}
          sx={{
            width: 80,
            height: 80,
            border: '3px solid white',
          }}
        />
      </Box>

      <Box
        sx={{
          paddingX: 4,
          paddingY: 2,
          height: '130px',
        }}
      >
        <Typography variant="subtitle2" color="text.primary" mb={'5px'}>
          שרותים:
        </Typography>

        <Stack spacing={0.5} mb={2}>
          {technician.services.map((technician, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              • {technician}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          flexWrap: 'wrap',
          gap: 1,
          backgroundColor: '#f5f5f5',
          padding: 1,
          width: '100%',
        }}
      >
        {technician.regions.map((region) => (
          <Chip
            key={region}
            label={
              <Typography variant="subtitle2" fontWeight="bold">
                {region}
              </Typography>
            }
            size="small"
            sx={{
              color: 'primary.main',
              backgroundColor: 'inherit',
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}

const gradients = [
  'linear-gradient(135deg, rgba(26, 188, 156, 1), rgba(77, 182, 172, 1))',
  'linear-gradient(135deg, rgba(38, 166, 154, 1), rgba(128, 203, 196, 1))',
  'linear-gradient(135deg, rgba(0, 150, 136, 1), rgba(77, 208, 225, 1))',
  'linear-gradient(135deg, rgba(0, 172, 193, 1), rgba(128, 222, 234, 1))',
  'linear-gradient(135deg, rgba(38, 198, 218, 1), rgba(77, 208, 225, 1))',
];
