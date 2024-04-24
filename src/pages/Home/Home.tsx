import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { useAuth } from "../../Context/AuthContext";
import TextEditor from "../../Components/TextEditor";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import JoinUs from "./Components/JoinUs/JoinUs";
import FAQSection from "./Components/FAQSection/FAQSection";

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

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
            <Typography variant="h4" align="center">
              Carousel Section
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Latest
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              What we do
            </Typography>
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <Typography variant="h4" align="center">
              <JoinUs />
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Our team
            </Typography>
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <NewsLetter />
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Contact
            </Typography>
            <FAQSection />
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
