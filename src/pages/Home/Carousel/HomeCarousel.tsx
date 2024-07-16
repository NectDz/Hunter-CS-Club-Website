import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";
import img1 from "./../consts/img1.png";
import img2 from "./../consts/img2.png";
import { Box, Button, Grid, Typography, colors } from "@mui/material";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  //TODO: replace with the actual images
  const images = [
    {
      id: "img1",
      name: "Image 1",
      source: img1,
    },
    {
      id: "img2",
      name: "Image 2",
      source: img2,
    },
    {
      id: "img3",
      name: "Image 3",
      source: img1,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={6}>
        <Carousel
          autoPlay={true}
          interval={8000}
          animation="fade"
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={true}
          stopAutoPlayOnHover={false}
          swipe={true}
          fullHeightHover={false}
        >
          {images.map((img) => (
            <img src={img.source} alt={img.name} key={img.id} />
          ))}
        </Carousel>
      </Grid>
      <Grid
        item
        xs={6}
        bgcolor="#4d2e91"
        color="white"
        padding="32px 64px"
        alignContent="center"
      >
        <Typography variant="h4" align="left" gutterBottom>
          Hello World!
        </Typography>
        <Typography variant="h6" align="left" gutterBottom>
          The Computer Science Club fosters a diverse and inclusive community of
          students at Hunter College. Through collaborative learning and
          hands-on projects, we aim to empower members to become innovative
          problem solvers, critical thinkers, and ethical leaders in the rapidly
          evolving field of tech.
        </Typography>
        <Button
          component={Link}
          to={"/about"}
          variant="outlined"
          sx={{
            borderRadius: 0,
            border: "1px solid white",
            color: "white",
            marginTop: "32px",
          }}
        >
          Become an official member
        </Button>
        <Box display="flex" gap="16px" marginTop="64px">
          {images.map((img) => (
            <img
              src={img.source}
              alt={img.name}
              key={img.id}
              width="96px"
              height="96px"
              style={{ objectFit: "cover", border: "1px solid white" }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeCarousel;
