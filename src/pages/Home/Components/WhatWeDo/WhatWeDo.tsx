import { Box, Grid, Typography } from "@mui/material";
import WhatWeDoCard from "./WhatWeDoCard";
import workshops from "./consts/workshops.png";
import projects from "./consts/projects.png";
import guestSpeakers from "./consts/guestSpeakers.png";

const WhatWeDo = () => {
  return (
    <Box sx={{ background: "#8D7CB6", padding: "64px" }}>
      <Typography
        variant="h4"
        align="center"
        color="#EAC566"
        sx={{
          marginBottom: "28px",
          fontWeight: "bold",
        }}
      >
        WHAT WE DO
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="#ffffff"
        sx={{ marginBottom: "48px" }}
      >
        Empower, Challenge, & Support Students
      </Typography>
      <Grid container gap={4} justifyContent="center">
        <WhatWeDoCard
          img={workshops}
          title="Workshops"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <WhatWeDoCard
          img={projects}
          title="Projects"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <WhatWeDoCard
          img={guestSpeakers}
          title="Guest Speakers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
