import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { db } from "../../../../firebase-config"; // Ensure your Firebase config is properly set
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import hunter from "./consts/hunter.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
  
    try {
      // Check if email is not empty and valid (basic email format check)
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setMessage("Please enter a valid email.");
        return;
      }
  
      // Add email to Firestore with timestamp
      await addDoc(collection(db, "emails"), {
        student_email: email,
        timestamp: serverTimestamp(),
      });
  
      // Update the message to show success
      setMessage("Successfully subscribed!");
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Failed to subscribe. Please try again.");
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
