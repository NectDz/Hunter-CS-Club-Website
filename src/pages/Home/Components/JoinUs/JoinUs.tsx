import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  JOIN_US_URL,
  QUESTIONS_PARAGRAPH,
  INVITATION_PARAGRAPH,
} from "./consts/texts.ts";
import { IMG_STYLES } from "./consts/styles.ts";
import joinUs from "./consts/joinUs.png";

const JoinUs = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "24px", fontWeight: "bold" }}
      >
        JOIN US
      </Typography>
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid item xs={4}>
          <img src={joinUs} alt="Join Us Section Image" style={IMG_STYLES} />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction={"column"}
            spacing={4}
            sx={{ width: "100%" }}
          >
            <Grid item xs={4}>
              <Typography variant="body1" align="left">
                {QUESTIONS_PARAGRAPH}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" align="left">
                {INVITATION_PARAGRAPH}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                component={Link}
                to={JOIN_US_URL}
                target="_blank"
                variant="outlined"
                color="inherit"
                sx={{ borderRadius: 0 }}
              >
                Become an official member
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinUs;
