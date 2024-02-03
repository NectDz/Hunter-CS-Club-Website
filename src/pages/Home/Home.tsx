import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GridItem from "../../Components/common/GridItem";

const Home = () => {
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      margin={0}
      sx={{ backgroundColor: "lightblue", width: "100%" }}
    >
      <GridItem>
        <Typography variant="h1" align="center"></Typography> // Dont remove
        this
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Welcome to the Hunter CS Club Website
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Who we are
        </Typography>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Latest
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          What we do
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Join Us
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Our team
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Past events
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Sponsors
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Subscribe to our mailing list
        </Typography>
      </GridItem>

      <GridItem>
        <Typography variant="h4" align="center">
          Contact
        </Typography>
      </GridItem>
    </Grid>
  );
};

export default Home;
