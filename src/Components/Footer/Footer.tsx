import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, overflowX: "hidden" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ paddingTop: "10px" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="h6" fontSize={30}>
                Hunter CS Club
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="body1">
                Copyright © 2023 Hunter CS Club All Rights Reserved
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <IconButton aria-label="Facebook" size="large">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" size="large">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" size="large">
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
