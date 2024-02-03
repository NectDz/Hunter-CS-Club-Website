import React from "react";
import Grid from "@mui/material/Grid";

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <Grid
    item
    xs={12}
    style={{
      padding: 25,
    }}
  >
    {children}
  </Grid>
);

export default GridItem;
