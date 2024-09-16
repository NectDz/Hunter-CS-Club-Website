import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import resourcesImg from "./consts/resources.png";

const Resources = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mb: 4,
      }}
    >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: { xs: 0, md: "40px" }, // Add gap between image and text for larger screens
          }}
        >
          <Box
            component="img"
            src={resourcesImg}
            alt="Resources Image"
            sx={{
              width: "390px",
              height: "300px",
              maxHeight: "400px",
              maxWidth: "400px",
              objectFit: "cover",
              marginRight: { xs: 0, md: "40px" },
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              padding: "20px",
              maxWidth: "500px", // Set a maximum width to constrain the text width
            }}
          >
            <Typography
              variant="h6"
              align="left"
              sx={{
                marginBottom: "20px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Looking for{" "}
              <Box component="span" sx={{ color: "purple" }}>
                internships
              </Box>
              ,{" "}
              <Box component="span" sx={{ color: "purple" }}>
                fellowships
              </Box>
              , or{" "}
              <Box component="span" sx={{ color: "purple" }}>
                interview
              </Box>{" "}
              resources?
            </Typography>

            <Typography
              variant="h6"
              align="left"
              sx={{
                marginBottom: "20px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Explore a wide array of{" "}
              <Box component="span" sx={{ color: "purple" }}>
                opportunities
              </Box>{" "}
              and{" "}
              <Box component="span" sx={{ color: "purple" }}>
                resources
              </Box>{" "}
              designed to help you{" "}
              <Box component="span" sx={{ color: "purple" }}>
                excel
              </Box>{" "}
              in your career journey!
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, // Center button on small screens, left-align on larger screens
              }}
            >
              <Button
                component={Link}
                to="/resources"
                variant="outlined"
                color="inherit"
                sx={{ borderRadius: 0, padding: "10px 20px" }}
              >
                Explore Resources
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Resources;
