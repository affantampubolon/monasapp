import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ChartOmset from "./vw_graphic/ChartOmset";
import OmsetBefCard from "./vw_banner/BannerSoBef";
import OmsetCurrCard from "./vw_banner/BannerSoCurr";
import ApCurrCard from "./vw_banner/BannerApCurr";
import OmsetBefMtdCard from "./vw_banner/BannerSoBefMtd";
import OmsetCurrMtdCard from "./vw_banner/BannerSoCurrMtd";
import ApCurrMtdCard from "./vw_banner/BannerApCurrMtd";
import SoYtdAscTable from "./vw_table/RankSoYtdAsc";
import SoYtdDescTable from "./vw_table/RankSoYtdDesc";
import { Container, Grid, Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function DashboardOperasional() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />
        {/* Tambahkan padding top atau margin top agar tidak tertutup oleh Navbar */}
        <Container component="main" maxWidth="xl" sx={{ mt: 10 }}>
          <CssBaseline />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="h5">Dashboard Operasional</Typography>
                {/* Konten dashboard */}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 0.25 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <OmsetBefCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <OmsetCurrCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <ApCurrCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 0.25 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <OmsetBefMtdCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <OmsetCurrMtdCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <ApCurrMtdCard />
                {/* Konten dashboard */}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 0.25 }}>
            <Grid item xs={12}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "20px",
                  bgcolor: blueGrey[900],
                }}
              >
                <ChartOmset />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 0.25 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "10px",
                  bgcolor: blueGrey[900],
                }}
              >
                <SoYtdAscTable />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box-shadow dengan sedikit efek bayangan
                  padding: "10px",
                  bgcolor: blueGrey[900],
                }}
              >
                <SoYtdDescTable />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default DashboardOperasional;
