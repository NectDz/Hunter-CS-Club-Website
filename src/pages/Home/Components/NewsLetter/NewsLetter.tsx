import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import hunter from "./consts/hunter.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
  
    // Get the current list of emails from localStorage or initialize an empty array if not present
    const storedEmails = JSON.parse(localStorage.getItem("emails") || "[]"); // Fallback to an empty array
  
    // Check if the email is already subscribed
    if (storedEmails.includes(email)) {
      setMessage("Email is already subscribed.");
    } else {
      // Add the new email to the list
      storedEmails.push(email);
  
      // Store the updated list in localStorage
      localStorage.setItem("emails", JSON.stringify(storedEmails));
  
      // Update message to show success
      setMessage("Successfully subscribed!");
    }
  
    // Clear the input field
    setEmail("");
  };
  

  return (
    <Box
      sx={{
        backgroundColor: "#4d2e91",
        paddingTop: "100px",
        paddingBottom: "140px",
        paddingX: "100px",
        marginX: "-49px",
        backgroundImage: `url(${hunter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#EAC566", marginBottom: "24px", fontWeight: "bold" }}
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
          value={email}
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
            backgroundColor: "#EAC566",
            color: "#FFFFFF",
            borderRadius: "0px 50px 50px 0px",
            paddingX: "34px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#dbb34d !important",
              boxShadow: "none !important",
              color: "#FFFFFF !important",
            },
          }}
        >
          Subscribe
        </Button>
      </form>
      {message && (
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: message.includes("failed") ? "red" : "green",
            marginTop: "12px",
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default NewsLetter;
