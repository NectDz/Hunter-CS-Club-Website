import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";
import img1 from "./consts/img1.jpg";
import img2 from "./consts/img2.jpg";
import img3 from "./consts/img3.jpg";
import img5 from "./consts/img5.jpeg";
import img6 from "./consts/img6.jpg";
import img8 from "./consts/img8.png";
import hunter from "./consts/hunter.png";
import arrowImage from "./consts/arrowImage.png";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const maxHeight = "950px";
const minHeight = "500px";

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const mobile = useMediaQuery("(max-width: 899px)");

  const images = [
    { id: "img1", name: "Image 1", source: img1 },
    { id: "img2", name: "Image 2", source: img2 },
    { id: "img3", name: "Image 3", source: img5 },
    { id: "img4", name: "Image 4", source: img8 },
    { id: "img5", name: "Image 5", source: img3 },
    { id: "img6", name: "Image 6", source: img6 },
  ];

  useEffect(() => {
    if (!mobile) {
      setDisplayText(""); // Reset displayText
      const fullText = "Heello World!";
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [mobile]);

  const handleScroll = (index: number) => {
    const scrollIndex = index * 96; // Assuming each thumbnail is 96px wide
    const element = document.getElementById("thumbnail-container");
    if (element) {
      element.scrollTo({
        left: scrollIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <Grid
      container
      direction={mobile ? "column" : "row"}
      maxHeight={{ xs: "100%", md: maxHeight }}
      bgcolor="#f5f5f5"
    >
      <Grid
        item
        xs={12}
        md={7}
        order={{ xs: 1, md: 1 }}
        maxHeight={{ xs: "100%", md: maxHeight }}
      >
        <Carousel
          autoPlay={true}
          interval={8000}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          stopAutoPlayOnHover={false}
          swipe={true}
          fullHeightHover={false}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              borderRadius: "50%",
              padding: "10px",
            },
          }}
          next={() => {
            setCurrent((prev) => {
              const nextIndex = (prev + 1) % images.length;
              handleScroll(nextIndex);
              return nextIndex;
            });
          }}
          prev={() => {
            setCurrent((prev) => {
              const prevIndex = (prev - 1 + images.length) % images.length;
              handleScroll(prevIndex);
              return prevIndex;
            });
          }}
        >
          {images.map((img) => (
            <Box
              key={img.id}
              sx={{
                backgroundImage: `url(${img.source})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: mobile ? minHeight : maxHeight,
                width: "100%",
                filter: "brightness(0.85)", // Slightly darken the image for better text contrast
              }}
            />
          ))}
        </Carousel>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        order={{ xs: 2, md: 2 }}
        color="white"
        padding="32px 64px"
        alignContent="center"
        maxHeight={{ xs: "100%", md: maxHeight }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          backgroundImage: `url(${hunter})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(77, 46, 145, 1)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: mobile ? "80px 40px" : "40px",
            width: mobile ? "calc(100% + 80px)" : "90%", // Increase width for mobile
            borderRadius: "8px",
            margin: mobile ? "0 -40px" : "0 auto", // Center horizontally with negative margins
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h3"
            align="left"
            color="#EAC566"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: mobile ? "''" : "'|'", // Conditionally render the cursor effect
                position: "absolute",
                right: "-20px", // Adjust the position of the cursor to add space
                animation: "blink 1s infinite", // Blinking animation
              },
              "@keyframes blink": {
                "0%": { opacity: 1 },
                "50%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
            }}
          >
            {mobile ? "Hello World!" : displayText}
          </Typography>
          <Typography
            variant="h6"
            align="left"
            gutterBottom
            sx={{
              lineHeight: 1.6,
              fontFamily: "Arial, sans-serif",
              fontSize: mobile ? "1.00rem" : "1.25rem",
            }}
          >
            The Computer Science Club fosters a diverse and inclusive community
            of students at Hunter College. Through collaborative learning and
            hands-on projects, we aim to empower members to become innovative
            problem solvers, critical thinkers, and ethical leaders in the
            rapidly evolving field of tech.
          </Typography>
          <Button
            component={Link}
            target="_blank"
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSc7GuIvMOy-VsetYr_-PSvH5km3T18VP8cYB6BhiJjpEC09wg/viewform"
            }
            variant="outlined"
            sx={{
              borderRadius: "4px",
              border: "2px solid #EAC566", // Solid border with the desired color
              color: "#EAC566",
              marginTop: "32px",
              padding: "10px 20px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent !important", // Override any background color change on hover
              "&:hover": {
                border: "2px solid #f4e2b2 !important",
                backgroundColor: "transparent !important", // Force the background to stay transparent
                color: "#f4e2b2 !important", // Keep the text color the same
                "& img": {
                  // Only target the arrow image for hover effect
                  transform: "translateX(8px)", // Move the arrow to the right
                },
              },
            }}
          >
            Become an official member
            <Box
              component="img"
              src={arrowImage}
              alt="Arrow"
              sx={{
                marginLeft: "8px",
                width: "50px",
                height: "auto",
                transition: "transform 0.3s ease", // Smooth transition for the arrow
              }}
            />
          </Button>

          {!mobile && (
            <Box
              id="thumbnail-container"
              display="flex"
              gap="16px"
              marginTop="64px"
              maxWidth="100%"
              overflow="hidden" // Hide the overflowing part
              sx={{
                whiteSpace: "nowrap", // Prevent line breaks in the thumbnails
              }}
            >
              {images.map((img, index) => (
                <img
                  src={img.source}
                  alt={img.name}
                  key={img.id}
                  width="96px"
                  height="96px"
                  style={{
                    objectFit: "cover",
                    border:
                      current === index ? "2px solid white" : "1px solid #555",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurrent(index);
                    handleScroll(index);
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeCarousel;
