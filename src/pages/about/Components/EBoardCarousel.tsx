// EBoardCarousel.jsx
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const boardMembers = [
  // Add all board members' details here
  { name: 'Shohruz Ernazarov', title: 'President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Muhammad Chaudhry', title: 'Vice President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Sumayia Rashid', title: 'Secretary', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Muhammad Chaudhry', title: 'Vice President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Sumayia Rashid', title: 'Secretary', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Muhammad Chaudhry', title: 'Vice President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Sumayia Rashid', title: 'Secretary', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Muhammad Chaudhry', title: 'Vice President', imageUrl: 'src/pages/about/Components/image.png' },
  { name: 'Sumayia Rashid', title: 'Secretary', imageUrl: 'src/pages/about/Components/image.png' },
  // ...add more board members
];

const EBoardCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3; // adjust number of items for mobile/tablet/desktop
  const chunkedBoardMembers = []; // array to hold chunks of board members

  // Split board members into chunks
  for (let i = 0; i < boardMembers.length; i += itemsPerPage) {
    chunkedBoardMembers.push(boardMembers.slice(i, i + itemsPerPage));
  }

  return (
    <Carousel
      autoPlay={true}
      interval={6000}
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
              <Card elevation={0} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={member.imageUrl}
                    alt={member.name}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/default-image.jpg"; // Fallback image
                    }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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
