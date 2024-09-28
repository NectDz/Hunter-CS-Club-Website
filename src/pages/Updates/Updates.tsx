import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { useAuth } from "../../Context/AuthContext";
import UpdateTextEditor from "./Components/UpdateTextEditor";
import UpdateFeed from "./Components/UpdatesFeed/UpdateFeed";

const Updates = () => {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={8}
        justifyContent="center"
        alignItems="center"
        margin={0}
        direction={"column"}
        sx={{ width: "100%" }}
      >
        <Box sx={{ marginTop: 8 }}> {/* Increased marginTop here */}
          <GridItem>
            <Typography
              fontWeight="bold"
              align="center"
              variant="h3"
              mb="32px"
            >
              Updates
            </Typography>
            <Typography
            fontWeight="bold"
            align="center"
            variant="h6"
            mb="32px"
            >
              Check out the latest news and updates from the Hunter Computer Science club
              and the team behind it all here!
            </Typography>
          </GridItem>
        </Box>

        {currentUser && (
          <Box>
            <GridItem>
              <UpdateTextEditor />
            </GridItem>
          </Box>
        )}

        <Box>
          <GridItem>
            <UpdateFeed />
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Updates;
