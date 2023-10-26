import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ sortedTabsData }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          {sortedTabsData.map((tab) => (
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "30px",
              }}
              key={tab.id}
              to={`/${tab.path}`}
            >
              {tab.title}
            </Link>
          ))}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
