import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import ContactForm from "./Components/ContactForm";
import GridItem from "../../Components/common/GridItem";
import NewsLetter from "../Home/Components/NewsLetter/NewsLetter";

const Contact = () => {
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
            <Typography variant="h6" gutterBottom sx={{ color: "Purple" }}>
              Have an inquiry for us? We'd love to hear from you.
            </Typography>
          </GridItem>
        </Box>

        <Box>
          <GridItem>
            <ContactForm />
          </GridItem>
        </Box>

        <Box sx={{ width: "100%" }}>
          <GridItem>
            <NewsLetter />
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
