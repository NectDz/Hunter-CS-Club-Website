import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Metric = ({
  color,
  number,
  label,
}: {
  color: string;
  number: number;
  label: string;
}) => {
  return (
    <Grid item xs={12} sm={6} p={2}>
      <Box
        display="flex"
        alignItems="center"
        sx={{ gap: { xs: "16px", md: "28px", lg: "50px" } }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minWidth: { xs: "50px", md: "60px" },
            minHeight: { xs: "50px", md: "60px" },
            borderRadius: "100%",
            background: color,
          }}
        >
          <Typography variant="h4" color="#FFFFFF">
            {number}
          </Typography>
        </Box>
        <Typography variant="h4">{label}</Typography>
      </Box>
    </Grid>
  );
};

export default Metric;
