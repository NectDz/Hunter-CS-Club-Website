import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { useAuth } from "../../Context/AuthContext";
import TextEditor from "../../Components/TextEditor";

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
        {currentUser && (
          <Box>
            <GridItem>
              <TextEditor />
            </GridItem>
          </Box>
        )}

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Whats New Section
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Updates Section
            </Typography>
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Updates;
