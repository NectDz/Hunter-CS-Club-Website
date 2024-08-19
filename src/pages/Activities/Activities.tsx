import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Metrics from "./Components/Metrics/Metrics";
import ActivityCard from "./Components/ActivityPosts/ActivityCard";

const Activities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const eventTime = "";
  // This checks if the current path is exactly '/activities'
  const isMainActivitiesRoute = location.pathname === "/activities";

  const handleAddActivity = () => {
    navigate("/activities/create");
  };

  return (
    <><header style={{ fontSize: '3em', textAlign: 'center', marginTop: '20px'}}>
      Club Activities
    </header>
    <p style={{ fontSize: '1em', textAlign: 'center', marginTop: '10px' }}>
  The Computer Science Club is an active and busy club. Check out our impressive and growing record of student led<br />
  activities to give back and support our amazing Computer Science community at Hunter College.
</p>

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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddActivity}
                >
                  Add New Activity
                </Button>
              </Grid>
            )}
            <ActivityCard
              thumbnailSrc="path/to/thumbnail"
              activityName="Activity Name"
              activityTag="Activity Tag"
              description="Testing Description for the activity card"
              postedTime={new Date(eventTime)} // Update the postedTime prop to be of type FirestoreTimestamp
              authorName="Author Name" />
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Info Section
              </Typography>
            </Grid>
          </>
        )}
        <Outlet />
      </Grid></>
  );
};

export default Activities;
