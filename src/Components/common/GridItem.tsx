import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Grid
    style={{
      padding: 25,
    }}
  >
    {children}
  </Grid>
);

export default GridItem;
