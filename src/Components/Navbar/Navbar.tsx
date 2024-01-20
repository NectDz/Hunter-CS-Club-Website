import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { mainNavbarItems } from "./consts/navbarItems";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            flexGrow: 1,
            fontWeight: 200,
            color: "white",
            letterSpacing: ".2rem",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Hunter CS Club
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          {mainNavbarItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => navigate(item.route)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
