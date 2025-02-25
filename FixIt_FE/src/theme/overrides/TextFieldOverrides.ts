export default function TextfieldOverrides() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#c4c4c4",
              borderRadius: 5,
            },
            "&:hover fieldset": {
              borderColor: "rgba(26, 188, 156, 1)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(26, 188, 156, 1)",
            },
          },
        },
        outlined: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c4c4c4",
            borderRadius: 5,
          },
        },
      },
    },
  };
}
