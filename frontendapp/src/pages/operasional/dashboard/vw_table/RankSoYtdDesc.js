import React from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Icon } from "@iconify/react";

// Data dan kolom untuk tabel
const data = [
  { name: "A", age: 123, status: "100%" },
  { name: "B", age: 123, status: "100%" },
  { name: "C", age: 123, status: "100%" },
  { name: "D", age: 123, status: "100%" },
  { name: "E", age: 123, status: "100%" },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export default function SoYtdAscTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          padding: 1,
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          Pencapaian Kumulatif Terkecil
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {table.getFlatHeaders().map((header) => (
                  <TableCell key={header.id}>
                    {header.column.columnDef.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{cell.getValue()}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative", // Menjaga relative position
          padding: "20px", // Tambahkan padding untuk ruang dalam box
          overflow: "hidden", // Menghindari elemen melampaui batas
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          Pencapaian Kumulatif Terkecil
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              color: red[500],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="solar:danger-outline" width="32" height="32" />
            <Typography>a</Typography>
          </Box>

          <Box
            sx={{
              color: red[500],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="solar:danger-outline" width="32" height="32" />
            <Typography>b</Typography>
          </Box>

          <Box
            sx={{
              color: red[500],
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon icon="solar:danger-outline" width="32" height="32" />
            <Typography>c</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
