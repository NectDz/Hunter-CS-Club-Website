import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, Button, Box } from "@mui/material";
import GridItem from "../../Components/common/GridItem";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Metrics from "./Components/Metrics/Metrics";
import ActivitiesFeed from "./Components/ActivityPosts/ActivitiesFeed";
// import { Timestamp } from "firebase/firestore";

const Activities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  // const eventTime = "";
  // This checks if the current path is exactly '/activities'
  const isMainActivitiesRoute = location.pathname === "/activities";
  // const mockedTimestamp = Timestamp.fromDate(new Date());

  const handleAddActivity = () => {
    navigate("/activities/create");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, paddingY: "80px", minHeight: "100vh" }}>
        <Grid
          container
          spacing={8}
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: isMobile ? "60px" : "0px" }}
        >
          {isMainActivitiesRoute && (
            <>
              <header
                style={{
                  fontSize: "3em",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Club Activities
              </header>
              <p
                style={{
                  fontSize: "1em",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                The Computer Science Club is an active and busy club. Check out
                our impressive and growing record of student led
                <br />
                activities to give back and support our amazing Computer Science
                community at Hunter College.
              </p>
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
              {/* <ActivityFeed/> */}
              <Grid item xs={12}>
                <Typography variant="h3" align="center" gutterBottom>
                  Info Section
                </Typography>
                <GridItem>
                  <ActivitiesFeed />
                </GridItem>
              </Grid>
            </>
          )}
          <Outlet />
        </Grid>
      </Box>
    </>
  );
};

export default Activities;
