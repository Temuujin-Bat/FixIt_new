export default function TextFieldOverrides() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#d7d7d7',
              borderRadius: 10,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(26, 188, 156, 1)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(26, 188, 156, 1)',
            },
          },
        },
        outlined: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d7d7d7',
            borderRadius: 10,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
