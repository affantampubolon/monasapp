import React from "react";
import { Box, Typography } from "@mui/material";
import { yellow, cyan } from "@mui/material/colors";
import { Icon } from "@iconify/react";

export default function OmsetCurrMtdCard() {
  return (
    <>
      {/* Box untuk layar besar (sm ke atas) */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Judul di bagian atas */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon icon="la:money-bill-wave" width={32} height={32} /> Total Omset
          Agt 2024
        </Typography>

        {/* Teks Total Omset di bagian tengah */}
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          123789
        </Typography>

        {/* Teks pojok kiri bawah */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 32,
            left: 2,
            fontWeight: "bold",
          }}
        >
          Achieve
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: yellow[500],
            position: "absolute",
            bottom: 8,
            left: 2,
            fontWeight: "bold",
          }}
        >
          75%
        </Typography>

        {/* Teks pojok kanan bawah */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 32,
            right: 2,
            fontWeight: "bold",
          }}
        >
          Growth
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: cyan[500],
            position: "absolute",
            bottom: 8,
            right: 2,
            fontWeight: "bold",
          }}
        >
          60%
        </Typography>
      </Box>

      {/* Box untuk layar kecil (xs) */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "left",
          position: "relative",
        }}
      >
        {/* Judul di bagian atas */}
        <Typography variant="caption" sx={{ left: 2, marginBottom: 3 }}>
          Omset Agt 2024
        </Typography>

        {/* Teks Total Omset di bagian tengah */}
        <Typography variant="h5" sx={{ left: 2, fontWeight: "bold" }}>
          123789
        </Typography>

        {/* Teks pojok kanan atas */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: 1,
            right: 2,
          }}
        >
          Ach
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: yellow[500],
            position: "absolute",
            top: 12,
            right: 2,
            fontWeight: "bold",
          }}
        >
          75%
        </Typography>

        {/* Teks pojok kanan bawah */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 22,
            right: 2,
          }}
        >
          Grw
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: cyan[500],
            position: "absolute",
            bottom: 1,
            right: 2,
            fontWeight: "bold",
          }}
        >
          60%
        </Typography>
      </Box>
    </>
  );
}
