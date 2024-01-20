import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import { mainNavbarItems } from "./consts/navbarItems";
/*import { Logo } from "../../assets/logo.svg";*/

function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {mainNavbarItems.map((item) => (
        <Button
          key={item.id}
          onClick={() => navigate(item.route)}
          sx={{ my: 2, color: "black", display: "block" }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            pl: isMobile ? 0 : { xs: 5, sm: 10, md: 15, lg: 30 },
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 200,
              color: "white",
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            Hunter CS Club
          </Typography>
        </Box>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: { xs: 5, sm: 10, md: 15, lg: 20 },
            }}
          >
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
        )}
      </Toolbar>

      <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
