import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

interface GridItemProps {
  children: React.ReactNode;
  padding?: number;
}

const GridItem = ({ children, padding = 25 }: GridItemProps) => (
  <Grid
    style={{
      padding: padding,
    }}
  >
    {children}
  </Grid>
);

export default GridItem;
