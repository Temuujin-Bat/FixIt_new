import { useMemo } from 'react';

// MUI
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';

// Third party
import { useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import 'dayjs/locale/mn';

const ThirdStep = () => {
  const { setValue, watch } = useFormContext();
  const selectedWorker = watch('worker');

  const unavailableDates = useMemo(() => {
    if (!selectedWorker) return [];

    return selectedWorker.unavailable
      .filter(({ start, end }: { start: string; end: string }) => start === '00:00' && end === '23:59')
      .map(({ date }: { date: string }) => date);
  }, [ selectedWorker ]);

  const shouldDisableDate = (date: dayjs.Dayjs) => {
    const formattedDate = date.format('YYYY-MM-DD');
    return unavailableDates.includes(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="mn">
      <DateCalendar
        disablePast
        views={[ 'day' ]}
        shouldDisableDate={shouldDisableDate}
        minDate={dayjs()}
        maxDate={dayjs().add(14, 'day')}
        onChange={(newDate) => setValue('date', newDate?.format('YYYY-MM-DD'))}
        sx={{
          mb: 15,
          width: '100%',
          height: '100%',
          overflow: 'visible',
          '& .MuiPickersCalendarHeader-root': {
            padding: 0,
          },
          '& .MuiDayCalendar-header': {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr) !important',
            textAlign: 'center',
            fontWeight: 'bold',
          },
          '& .MuiDayCalendar-weekContainer': {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr) !important',
            mb: 3,
          },
          '& .MuiPickersSlideTransition-root': {
            minHeight: '900px'
          },
          '& .MuiPickersDay-root': {
            fontSize: '1rem',
            borderRadius: '100px',
          },
          '& .MuiPickersDay-root:not(.Mui-disabled)': {
            backgroundColor: 'secondary.lighter',
            color: 'secondary.darker',
            fontWeight: 'bold',
            transition: '0.3s',
            '&:hover': {
              backgroundColor: 'secondary.main'
            },
          },
          '& .MuiPickersDay-root.Mui-selected': {
            backgroundColor: 'secondary.main',
            color: 'white !important',
          },
        }}
      />
    </LocalizationProvider>
  );
};

export { ThirdStep };