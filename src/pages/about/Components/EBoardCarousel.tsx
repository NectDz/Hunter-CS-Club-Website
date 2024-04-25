// EBoardCarousel.jsx
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const boardMembers = [
  // Add all board members' details here
  { name: 'Shohruz Ernazarov', title: 'President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Muhammad Chaudhry', title: 'Vice President', imageUrl: 'src/pages/about/Components/consts/Eboard/Mo.jpg' },
  { name: 'Kevin Granados', title: 'Tech Lead', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Sumayia Rashid', title: 'Secretary', imageUrl: 'src/pages/about/Components/consts/Eboard/Sum.jpg' },
  { name: 'Michelle Lee', title: 'Graphic Designer', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Matthew  LaBarca', title: 'Tresurer', imageUrl: '/src/pages/about/Components/consts/Eboard/Matt.jpg' },
  { name: 'George Sucuzhañay', title: 'Event Coordinator', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Hridia Tanha', title: 'Marketing Manager', imageUrl: 'src/pages/about/Components/consts/Eboard/Hridia.jpg' },
  { name: 'Ashley Ngo', title: 'Social Media Marketing Manager', imageUrl: 'src/pages/about/Components/consts/Eboard/Ash.jpg' },
  { name: 'Sara Perera', title: 'Graphic Designer', imageUrl: 'src/pages/about/Components/consts/Eboard/Sara.jpg' },
];

const EBoardCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const itemsPerPage = isMobile ? 2 : isTablet ? 2 : 5; // adjust number of items for mobile/tablet/desktop
  const chunkedBoardMembers = []; // array to hold chunks of board members

  // Split board members into chunks
  for (let i = 0; i < boardMembers.length; i += itemsPerPage) {
    chunkedBoardMembers.push(boardMembers.slice(i, i + itemsPerPage));
  }

  return (
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
      {chunkedBoardMembers.map((chunk, index) => (
        <Box key={index} display="flex" justifyContent="center">
          {chunk.map((member, i) => (
            <Box key={i} padding={1} flex={1} display="flex" justifyContent="center">
              <Card elevation={0} sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={member.imageUrl}
                    alt={member.name}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/default-image.jpg"; // Fallback image
                    }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx ={{color:"#4d2e91"}}>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default EBoardCarousel;
