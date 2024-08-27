import React from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function ApCurrCard() {
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
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon
            icon="fluent:money-settings-20-regular"
            width={32}
            height={32}
          />{" "}
          Total Anggaran 2024
        </Typography>
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
        ></Typography>
        <Typography
          variant="h5"
          sx={{ position: "absolute", bottom: 8, left: 2, fontWeight: "bold" }}
        ></Typography>

        {/* Teks pojok kanan bawah */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 32,
            right: 2,
            fontWeight: "bold",
          }}
        ></Typography>
        <Typography
          variant="h5"
          sx={{ position: "absolute", bottom: 8, right: 2, fontWeight: "bold" }}
        ></Typography>
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
        <Typography variant="caption" sx={{ left: 2, marginBottom: 3 }}>
          Anggaran 2024
        </Typography>
        <Typography variant="h5" sx={{ left: 2, fontWeight: "bold" }}>
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
        ></Typography>

        {/* Teks pojok kanan bawah */}
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: 32,
            right: 2,
            fontWeight: "bold",
          }}
        ></Typography>
      </Box>
    </>
  );
}
