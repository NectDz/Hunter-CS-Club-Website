import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const WhatWeOffer = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const offers = [
    {
      name: "UI/UX Design",
      description: `Join us at our first Spring Meet And Greet on February 29,2024 from 2:00 - 4:00 pm for an excitiyng afternoon! We will reveal our UI/UX website project Lorem ipsum dolor sit amet consectetur adipisicing elit. Delluptate excepturi enim possimus, id at.Lorem ipsum dolor sit amet consectetur adipisicing elit.niti voluptate excepturi enim possimus, id at`,
    },
    {
      name: "lorem ipsum",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate excepturi enim possimus, id at.Lorem ip excepturi enim possimus, id at.
      `,
    },
    {
      name: "lorem ipsum",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate excepturi enim possimus, id at.
        `,
    },
    {
      name: "lorem ipsum",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delluptate excepturi enim possimus, id at.Lorem ipsum dolor sit amet consectetur adipisicing elit.niti voluptate excepturi enim possimus, id at.
        `,
    },
  ];
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        What We Offer
      </Typography>
      <Box>
        <Box>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
          >
            {offers.map((offer, index) => {
              return (
                <Box
                  sx={{
                    backgroundColor: "#9859AC",
                    //add a background image  of ur choice here instead of color
                    padding: "60px 40px",
                    color: "white",
                  }}
                  key={index}
                >
                  <Typography variant="h4" align="center" gutterBottom>
                    {offer.name}
                  </Typography>
                  <Typography
                    fontSize={20}
                    variant="body1"
                    px={10}
                    align="center"
                  >
                    {offer.description}
                  </Typography>
                </Box>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeOffer;
