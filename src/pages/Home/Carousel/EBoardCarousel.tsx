// EBoardCarousel.jsx
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Shoruz from "../../about/Components/consts/Eboard/Shoruz.jpg";
import Kev from "../../about/Components/consts/Eboard/Kev.jpg";
import Sum from "../../about/Components/consts/Eboard/Sum.jpg";
import Michelle from "../../about/Components/consts/Eboard/Michelle.jpg";
import Hridia from "../../about/Components/consts/Eboard/Hridia.jpg";
import Ash from "../../about/Components/consts/Eboard/Ash.jpg";
import Justin from "../../about/Components/consts/Eboard/Justin.jpg";
import Kartic from "../../about/Components/consts/Eboard/kartic.jpg";
import Ayesha from "../../about/Components/consts/Eboard/Ayesha.jpg";
import George from "../../about/Components/consts/Eboard/george.jpg";
import Nico from "../../about/Components/consts/Eboard/nico.png";

const boardMembers = [
  // Add all board members' details here
  {
    name: "Shohruz Ernazarov",
    title: "President",
    imageUrl: Shoruz,
  },
  {
    name: "Sumayia Rashid",
    title: "Vice President",
    imageUrl: Sum,
  },
  {
    name: "Hridia Tanha",
    title: "Secretary",
    imageUrl: Hridia,
  },
  {
    name: "Kevin Granados",
    title: "Tech Lead",
    imageUrl: Kev,
  },
  {
    name: "Justin Chu",
    title: "Tech Lead",
    imageUrl: Justin,
  },
  {
    name: "George Guerrero",
    title: "Treasurer",
    imageUrl: George,
  },
  {
    name: "Michelle Lee",
    title: "Graphic Designer",
    imageUrl: Michelle,
  },
  {
    name: "Nico Bautista-Libreros",
    title: "Graphic Designer",
    imageUrl: Nico,
  },
  {
    name: "Kartic Vanjani",
    title: "Event Coordinator",
    imageUrl: Kartic,
  },
  {
    name: "Ayesha Ahmed",
    title: "Marketing Manager",
    imageUrl: Ayesha,
  },
  {
    name: "Ashley Ngo",
    title: "Social Media Manager",
    imageUrl: Ash,
  },
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
            <Box
              key={i}
              padding={1}
              flex={1}
              display="flex"
              justifyContent="center"
            >
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#4d2e91" }}
                  >
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
