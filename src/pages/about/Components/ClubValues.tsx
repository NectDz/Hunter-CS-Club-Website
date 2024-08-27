import { Box, Grid } from "@mui/material";
import ValueCard from "./ValueCard";
import { values } from "./consts/values";
import { Fragment } from "react";

const Separator = () => (
  <Box
    sx={{
      height: { xs: "0", md: "260px" },
      width: "1px",
      background: "#000000",
    }}
  />
);

const ClubValues = () => {
  return (
    <Grid
      container
      sx={{ flexWrap: "wrap", flexDirection: "row" }}
      justifyContent="center"
      gap={4}
    >
      {values.map(({ id, label, description, color }, index) => (
        <Fragment key={id}>
          {index === 1 && <Separator />}
          <ValueCard label={label} text={description} color={color} />
          {index === 1 && <Separator />}
        </Fragment>
      ))}
    </Grid>
  );
};

export default ClubValues;
