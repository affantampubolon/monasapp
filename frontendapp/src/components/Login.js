import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          component="main"
          maxWidth="md"
          sx={{
            border: { xs: "none", sm: "2px solid white" }, // Line border berwarna putih
            borderRadius: "25px", // Border-radius 25px
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
            padding: "20px", // Memberikan padding agar konten tidak terlalu dekat dengan border
          }}
        >
          <CssBaseline />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: { xs: "none", sm: "block" }, height: "100%" }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/keep_smile.png`}
                alt="Keep Smile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>A</Avatar> */}
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
