import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const DummyTable = () => {
  const rows = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Bob Johnson", age: 35 },
    { id: 4, name: "Alice Williams", age: 40 },
    { id: 5, name: "Tom Brown", age: 45 },
    { id: 6, name: "Emily Davis", age: 50 },
    { id: 7, name: "Jack Parker", age: 55 },
    { id: 8, name: "Kimberly White", age: 60 },
    { id: 9, name: "Kevin Brown", age: 65 },
    { id: 10, name: "Linda Anderson", age: 70 },
  ];

  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
        Table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DummyTable;
