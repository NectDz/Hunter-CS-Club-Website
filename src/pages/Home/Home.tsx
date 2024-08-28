import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { useAuth } from "../../Context/AuthContext";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import JoinUs from "./Components/JoinUs/JoinUs";
import FAQSection from "./Components/FAQSection/FAQSection";
import ContactForm from "../Contact/Components/ContactForm";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import EBoardCarousel from "./Carousel/EBoardCarousel";
import HomeCarousel from "./Carousel/HomeCarousel";

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
        <Box sx={{ width: "100%" }}>
          <Grid sx={{ paddingX: 0, paddingY: 2 }}>
            <HomeCarousel />
          </Grid>
        </Box>

        <Box>
          <GridItem>
            <Typography variant="h4" align="center">
              Latest
            </Typography>
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid sx={{ padding: 0 }}>
            <WhatWeDo />
          </Grid>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <Typography variant="h4" align="center">
              <JoinUs />
            </Typography>
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <Typography
              fontSize="35px"
              fontWeight="bold"
              align="center"
              variant="h5"
              mb="32px"
            >
              Meet the E-Board
            </Typography>
            <EBoardCarousel />
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <NewsLetter />
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <FAQSection />
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <Typography
              fontSize="35px"
              fontWeight="bold"
              align="center"
              variant="h5"
              mb="32px"
            >
              Have more questions? Contact us!
            </Typography>
            <GridItem>
              <ContactForm />
            </GridItem>
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Home;
