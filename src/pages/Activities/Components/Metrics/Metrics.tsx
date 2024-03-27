import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Metrics = () => {
  return (
    <Box>
      <Grid
        container
        sx={{ border: "0.89px solid #000000", padding: "138px 98px" }}
      >
        <Grid item xs={6}>
          <Typography variant="h3">Our club has held...</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap="50px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "125px",
                height: "125px",
                borderRadius: "100%",
                background: "#2D684B",
              }}
            >
              <Typography variant="h2" color="#FFFFFF">
                3
              </Typography>
            </Box>
            <Typography variant="h3">Social Events</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap="50px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "125px",
                height: "125px",
                borderRadius: "100%",
                background: "#E45D58",
              }}
            >
              <Typography variant="h2" color="#FFFFFF">
                2
              </Typography>
            </Box>
            <Typography variant="h3">Hackathons</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap="50px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "125px",
                height: "125px",
                borderRadius: "100%",
                background: "#8F5CA7",
              }}
            >
              <Typography variant="h2" color="#FFFFFF">
                1
              </Typography>
            </Box>
            <Typography variant="h3">Workships</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap="50px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "125px",
                height: "125px",
                borderRadius: "100%",
                background: "#7F54DC",
              }}
            >
              <Typography variant="h2" color="#FFFFFF">
                1
              </Typography>
            </Box>
            <Typography variant="h3">Projects</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" alignItems="center" gap="50px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "125px",
                height: "125px",
                borderRadius: "100%",
                background: "#EAC566",
              }}
            >
              <Typography variant="h2" color="#FFFFFF">
                2
              </Typography>
            </Box>
            <Typography variant="h3">Speakers</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metrics;
