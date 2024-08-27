import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Container, Box, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartOmset() {
  // State untuk mendeteksi ukuran layar dan menyesuaikan opsi legend
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Effect untuk mendengarkan perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Menambahkan event listener ketika window di-resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agt",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "AP %",
        data: [48, 58, 26, 17, 20, 28, 20, 5, 0, 0, 0, 0],
        borderColor: "#ffeb3b",
        backgroundColor: "#ffeb3b",
        fill: false,
      },
      {
        label: "GRW %",
        data: [64, 86, 47, 21, 24, 30, 36, 7, 0, 0, 0, 0],
        borderColor: "#00bcd4",
        backgroundColor: "#00bcd4",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    tension: 0.3,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !isMobile, // Sembunyikan legend jika mobile
        labels: {
          color: "white", // Ubah warna label legend menjadi putih
        },
      },
      title: {
        display: true,
        text: "Penjualan YTD",
        color: "white", // Ubah warna teks judul menjadi putih
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Ubah warna teks pada sumbu x menjadi putih
        },
      },
      y: {
        ticks: {
          color: "white", // Ubah warna teks pada sumbu y menjadi putih
        },
      },
    },
  };

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
      <Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: { xs: 150, sm: 250, md: 350 } }}>
            <Line data={data} options={options} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
