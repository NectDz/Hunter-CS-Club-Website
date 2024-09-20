import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography, Button, Box, Stack } from "@mui/material";
import GridItem from "../../Components/common/GridItem";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
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
      <Box
        sx={{
          flexGrow: 1,
          paddingY: "80px",
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: isMobile ? "60px" : "0px" }}
        >
          {isMainActivitiesRoute && (
            <>
              <Stack>
                <Typography
                  fontWeight="bold"
                  align="center"
                  variant="h3"
                  mb="32px"
                >
                  Club Activities
                </Typography>
                <Typography
                  fontWeight="bold"
                  align="center"
                  variant="h6"
                  mb="32px"
                >
                  Check out our impressive and growing record of student led
                  activities to give back and support our amazing Computer
                  Science community at Hunter College.
                </Typography>
              </Stack>
              {/* <Grid item xs={12}>
                <Metrics />
              </Grid> */}

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
