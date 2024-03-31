import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Metric from "./Metric";
import ClubDate from "./ClubDate";

const Metrics = () => {
  return (
    <Box
      sx={{
        margin: { xs: "0 16px", md: "0 64px", lg: "0 106px", xl: "0 206px" },
      }}
    >
      <ClubDate />
      <Grid
        container
        wrap="wrap"
        sx={{
          border: "0.89px solid #000000",
          padding: { md: "70px 40px", xl: "86px 56px" },
        }}
      >
        <Grid item xs={12} sm={6} p={2} alignContent="center">
          <Typography
            variant="h4"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Our club has held...
          </Typography>
        </Grid>
        <Metric color="#2D684B" number={3} label="Social Events" />
        <Metric color="#E45D58" number={2} label="Hackathons" />
        <Metric color="#8F5CA7" number={1} label="Workshops" />
        <Metric color="#7F54DC" number={1} label="Projects" />
        <Metric color="#EAC566" number={2} label="Speakers" />
      </Grid>
      <Typography variant="body1" align="left" marginTop="12px">
        LAST UPDATED: 2/11/2024
      </Typography>
    </Box>
  );
};

export default Metrics;
