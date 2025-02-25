export default function SelectOverrides() {
  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderColor: "#c4c4c4",
          borderRadius: 5,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(26, 188, 156, 1)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(26, 188, 156, 1)",
          },
        },
      },
    },
  };
}
