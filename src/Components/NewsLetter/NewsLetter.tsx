import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const NewsLetter = () => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "#E45D58",
        paddingTop: "100px",
        paddingBottom: "164px",
        paddingX: "200px",
      }}
    >
      <Typography variant="h4" align="center" sx={{ color: "#FFFFFF" }}>
        JOIN OUR NEWSLETTER
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: "#FFFFFF" }}>
        Stay up to date with the latest news, event, and resources!
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField
          required
          fullWidth
          id="email-address"
          variant="standard"
          placeholder="Email Address"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "50px 0px 0px 50px",
            paddingX: "24px",
            paddingY: "8px",
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#46165C",
            color: "#FFFFFF",
            borderRadius: "0px 50px 50px 0px",
            paddingX: "34px",
            textTransform: "none",
          }}
        >
          Suscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsLetter;
