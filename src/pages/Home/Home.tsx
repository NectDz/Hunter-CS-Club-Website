import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommonButton from "../../Components/common/CommonButton/CommonButton";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Hunter CS Club Website
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="h4" align="center">
          About Us
        </Typography>
        <Typography>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          }
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Our Team
        </Typography>
        {/* Add cards or other components to display team members */}
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Contact
        </Typography>
        <Paper>{/* Contact information or a form */}</Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
