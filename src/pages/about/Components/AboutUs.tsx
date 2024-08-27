import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      textAlign="center"
      sx={{
        margin: {
          xl: "0 35%",
          lg: "0 25%",
          md: "0 12rem",
          sm: "0 6rem",
          xs: "0 1rem",
        },
      }}
    >
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Mission Statement
      </Typography>
      <Typography variant="h5">
        Our mission is to build a collaborative space where technology
        enthusiasts can thrive an contribute to the wider community.
      </Typography>
    </Box>
  );
};

export default AboutUs;
