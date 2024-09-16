import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import GridItem from "../../Components/common/GridItem";
import Box from "@mui/material/Box";
import { useAuth } from "../../Context/AuthContext";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import JoinUs from "./Components/JoinUs/JoinUs";
import FAQSection from "./Components/FAQSection/FAQSection";
import ContactForm from "./Components/ContactForm/ContactForm";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import EBoardCarousel from "./Carousel/EBoardCarousel";
import HomeCarousel from "./Carousel/HomeCarousel";
import Resources from "./Components/Resources/Resources";

const Home = () => {
  const { currentUser } = useAuth();
  const aboutRef = useRef<HTMLDivElement>(null!);
  const updateRef = useRef<HTMLDivElement>(null!);
  const faqRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      if (location.state.scrollTo === "faq" && faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (location.state.scrollTo === "about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (location.state.scrollTo === "updates" && updateRef.current) {
        updateRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (location.state.scrollTo === "contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
          <Grid
            sx={{
              paddingX: 0,
              paddingY: { xs: 0, sm: 0 }, // 0 for mobile (xs), 2 for small screens and up
            }}
          >
            <HomeCarousel />
          </Grid>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <Typography
              fontSize="35px"
              fontWeight="bold"
              align="center"
              variant="h5"
              mb="32px"
              padding="20px"
            >
              RESOURCES
            </Typography>
            <Resources />
          </GridItem>
        </Box>

        <Box ref={aboutRef} sx={{ width: "100%" }}>
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
            <NewsLetter />
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

        <Box ref={faqRef}>
          <GridItem>
            <FAQSection />
          </GridItem>
        </Box>

        <Box ref={contactRef}>
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
