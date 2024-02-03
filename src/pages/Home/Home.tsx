import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        margin={0}
        direction={"column"}
        sx={{ backgroundColor: "lightblue", width: "100%" }}
      >
        <GridItem>
          <Typography variant="h1" align="center"></Typography> // Dont remove
          this
        </GridItem>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Welcome to the Hunter CS Club Website
            </Typography>
          </GridItem>
        </Box>

        <Box sx={{ backgroundColor: "Green" }}>
          <GridItem>
            <Typography variant="h4" align="center">
              Who we are
            </Typography>
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Latest
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              What we do
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Join Us
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Our team
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Past events
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Sponsors
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Subscribe to our mailing list
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Contact
            </Typography>
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
