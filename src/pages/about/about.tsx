import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import WhatWeOffer from "./Components/WhatWeOffer";
import ClubValues from "./Components/ClubValues";
import EBoardCarousel from "./Components/EBoardCarousel";
import AboutUs from "./Components/AboutUs";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      <Grid item xs={12}>
        <AboutUs />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          <ClubValues />
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Meet the E-Board
        </Typography>
        {/* What we offer carosuel section */}
        <WhatWeOffer />
        <EBoardCarousel />
      </Grid>
    </Grid>
  );
};

export default About;
