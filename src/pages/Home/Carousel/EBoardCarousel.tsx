// EBoardCarousel.jsx
import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Shoruz from "../../about/Components/consts/Eboard/Shoruz.jpg";
import Mo from "../../about/Components/consts/Eboard/Mo.jpg";
import Kev from "../../about/Components/consts/Eboard/Kev.jpg";
import Sum from "../../about/Components/consts/Eboard/Sum.jpg";
import Michelle from "../../about/Components/consts/Eboard/Michelle.jpg";
import Matt from "../../about/Components/consts/Eboard/Matt.jpg";
import Hridia from "../../about/Components/consts/Eboard/Hridia.jpg";
import Ash from "../../about/Components/consts/Eboard/Ash.jpg";
import Sara from "../../about/Components/consts/Eboard/Sara.jpg";

const boardMembers = [
  // Add all board members' details here
  {
    name: "Shohruz Ernazarov",
    title: "President",
    imageUrl: Shoruz,
  },
  {
    name: "Muhammad Chaudhry",
    title: "Vice President",
    imageUrl: Mo,
  },
  {
    name: "Kevin Granados",
    title: "Tech Lead",
    imageUrl: Kev,
  },
  {
    name: "Sumayia Rashid",
    title: "Secretary",
    imageUrl: Sum,
  },
  {
    name: "Michelle Lee",
    title: "Graphic Designer",
    imageUrl: Michelle,
  },
  {
    name: "Matthew  LaBarca",
    title: "Treasurer",
    imageUrl: Matt,
  },
  {
    name: "George Sucuzhañay",
    title: "Event Coordinator",
    imageUrl: "",
  },
  {
    name: "Hridia Tanha",
    title: "Marketing Manager",
    imageUrl: Hridia,
  },
  {
    name: "Ashley Ngo",
    title: "Marketing Manager",
    imageUrl: Ash,
  },
  {
    name: "Sara Perera",
    title: "Graphic Designer",
    imageUrl: Sara,
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
