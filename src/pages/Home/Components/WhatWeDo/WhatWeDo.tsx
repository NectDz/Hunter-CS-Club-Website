import { Box, Grid, Typography } from "@mui/material";
import WhatWeDoCard from "./WhatWeDoCard";
import workshops from "./consts/workshops.png";
import projects from "./consts/projects.png";
import guestSpeakers from "./consts/guestSpeakers.png";
import gameRoom from "./consts/gameRoom.png";

const WhatWeDo = () => {
  return (
    <Box sx={{ background: "#4d2e91", padding: "64px",  backgroundImage: `url(${gameRoom})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(77, 46, 145, 1)",
    backgroundBlendMode: "overlay", }}>
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
          description="Workshops on coding, project development, and getting internships! These sessions empower students with the skills needed to excel in the tech industry."
        />
        <WhatWeDoCard
          img={projects}
          title="Projects"
          description="Hands-on projects that allow students to apply their coding skills and collaborate on real-world tech solutions. These projects foster innovation and teamwork, preparing members for future challenges in the tech industry."
        />
        <WhatWeDoCard
          img={guestSpeakers}
          title="Guest Speakers"
          description="
Guest speakers from the tech industry are invited to share insights and career advice, helping students connect with professionals and find inspiration for their own paths in tech."
        />
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
