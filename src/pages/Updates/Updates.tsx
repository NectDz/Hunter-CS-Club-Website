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
        <Box>
          <GridItem>
            <Typography variant="h3">Whats New Section</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
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
