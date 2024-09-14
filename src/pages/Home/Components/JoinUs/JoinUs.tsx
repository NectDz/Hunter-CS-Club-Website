import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  JOIN_US_URL,
  QUESTIONS_PARAGRAPH,
  INVITATION_PARAGRAPH,
} from "./consts/texts.ts";
import { IMG_STYLES } from "./consts/styles.ts";
import joinUs from "./consts/joinUs.png";

const JoinUs = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "40px", fontWeight: "bold" }}
      >
        JOIN US
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "64px",
          flexDirection: { sm: "row", md: "colum" },
        }}
      >
        <img src={joinUs} alt="Join Us Section Image" style={IMG_STYLES} />
        <Box sx={{ width: { xs: "100%", md: "35%", lg: "30%", xl: "25%" } }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            gap={{ xs: "24px", md: "50px" }}
            sx={{
              height: "100%",
              width: "100%",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Grid item>
              <Typography
                variant="h6"
                align="left"
                component="p"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                {QUESTIONS_PARAGRAPH}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                align="left"
                component="p"
                sx={{
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                {INVITATION_PARAGRAPH}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to={JOIN_US_URL}
                target="_blank"
                variant="outlined"
                color="inherit"
                sx={{ borderRadius: 0 }}
              >
                Become an official member
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUs;
