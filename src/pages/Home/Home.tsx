import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../Components/common/CommonButton/CommonButton";
const Home = () => {
  return (
    <Grid item xs={8}>
      This is home page.
      <CommonButton variant="contained" size="small">
        Test
      </CommonButton>
    </Grid>
  );
};

export default Home;
