import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    //TODO: use email to sign user to the NewsLetter
    console.log("EMAIL: ", email);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E45D58",
        paddingTop: "100px",
        paddingBottom: "140px",
        paddingX: "100px",
        marginX: "-49px", //Removes parents' horizontal padding
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#FFFFFF", marginBottom: "24px", fontWeight: "bold" }}
      >
        JOIN OUR NEWSLETTER
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: "#FFFFFF" }}>
        Stay up to date with the latest news, events, and resources!
      </Typography>
      <form
        style={{ display: "flex", marginTop: "12px", justifyContent: "center" }}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id="email-address"
          variant="standard"
          placeholder="Email Address"
          defaultValue={email}
          onChange={({ target }) => setEmail(target.value)}
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "50px 0px 0px 50px",
            paddingX: "24px",
            paddingY: "8px",
            maxWidth: "360px",
          }}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button
          type="submit"
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
      </form>
    </Box>
  );
};

export default NewsLetter;
