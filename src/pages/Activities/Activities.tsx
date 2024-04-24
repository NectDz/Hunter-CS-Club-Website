import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";
import Metrics from "./Components/Metrics/Metrics";

const Activities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  // This checks if the current path is exactly '/activities'
  const isMainActivitiesRoute = location.pathname === '/activities';

  const handleAddActivity = () => {
    navigate("/activities/create");
  };

  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      {isMainActivitiesRoute && (
        <>
          <Grid item xs={12}>
            <Metrics />
          </Grid>

          {currentUser && (
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={handleAddActivity}>
              Add New Activity
            </Button>
          </Grid>
          )}

          <Grid item xs={12}>
            <Typography variant="h3" align="center" gutterBottom>
              Recent Activities
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3" align="center" gutterBottom>
              Info Section
            </Typography>
          </Grid>
        </>
      )}
      <Outlet />  
    </Grid>
  );
};

export default Activities;
