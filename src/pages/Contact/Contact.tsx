import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ContactForm from "./Components/ContactForm";
import GridItem from "../../Components/common/GridItem";
const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      margin={0}
      direction={"column"}
      sx={{ width: "100%" }}
    >
      <Box>
        <GridItem>
            <Typography variant="h3" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" gutterBottom sx={{color: "Purple"}}>
            Have an inquiry for us? We'd love to hear from you.
          </Typography>
          </GridItem>
      </Box>

      <Box>
        <GridItem>
          <ContactForm />
        </GridItem>
      </Box>
      
    </Grid>
    </Box>
  );
};

export default Contact;
