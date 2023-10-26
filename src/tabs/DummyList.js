import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const DummyList = () => {
  // Array of items
  const items = [
    "John Doe",
    "Jane Smith",
    "Bob",
    "Alice",
    "Tom",
    "Emily",
    "Jack",
    "Kimberly",
    "Kevin",
    "Linda",
  ];

  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
        List
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DummyList;
