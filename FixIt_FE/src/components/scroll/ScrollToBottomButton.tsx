import { useRef } from "react";

// MUI
import { Box } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const ScrollToBottomButton = () => {
  const isVisibleRef = useRef(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    isVisibleRef.current = scrollTop + clientHeight < scrollHeight - 10;
    const button = document.getElementById("scroll-to-bottom-button");

    if (button) {
      button.style.display = isVisibleRef.current ? "block" : "none";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Box
      id="scroll-to-bottom-button"
      onClick={scrollToBottom}
      sx={{ zIndex: "1000", position: "fixed", bottom: 16, right: 16 }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: 50,
          height: 50,
          borderRadius: "50%",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "primary.dark",
            cursor: "pointer",
          },
        }}
      >
        <ArrowDownward fontSize="large" sx={{ color: "white" }} />
      </Box>
    </Box>
  );
};

export default ScrollToBottomButton;
