import React from "react";
import { Typography, Box } from "@mui/material";

const DummyChart = () => (
  <>
    <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
      Chart
    </Typography>
    <Box display="flex" justifyContent="center">
      <Box sx={{ m: 1 }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        ></div>
      </Box>
      <Box sx={{ m: 1 }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "blue",
          }}
        ></div>
      </Box>
      <Box sx={{ m: 1 }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        ></div>
      </Box>
    </Box>
  </>
);

export default DummyChart;
