import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "./DiscordIcon";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ top: "auto", bottom: 0, overflowX: "hidden" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ paddingTop: "10px" }}>
          <Grid
            container
            spacing={1}
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
              
            <a href="https://www.linkedin.com/company/huntercsclub" target="_blank" rel="noopener noreferrer">
             <IconButton aria-label="LinkedIn" size="large" color = "inherit">
             <LinkedInIcon sx={{ color: 'white' }} />
              </IconButton>
              </a>
              <a href="https://www.instagram.com/huntercsclub/" target="_blank" rel="noopener noreferrer">
             <IconButton aria-label="Instagram" size="large" color = "inherit">
             <InstagramIcon sx={{ color: 'white' }} />
              </IconButton>
              </a>
              <a href="https://discord.gg/WhZSaHX7gd" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="Discord" size="large" color = "inherit">
                <DiscordIcon sx={{ color: 'white '}} />
              </IconButton>
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
