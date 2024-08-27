import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{/* Konten utama halaman */}</Box>
        <Box sx={{ bgcolor: "background.paper", p: 2 }} component="footer">
          <Typography variant="body1" align="center">
            © 2024 Company Name. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
