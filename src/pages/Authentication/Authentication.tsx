import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../Components/common/CommonButton/CommonButton";
const Authentication = () => {
  return (
    <Grid item xs={8}>
      This is authentication page.
      <CommonButton variant="contained" size="small">
        Test
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
