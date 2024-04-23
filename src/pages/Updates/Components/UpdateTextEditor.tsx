import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../../firebase-config";
import { collection, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useAuth } from "../../../Context/AuthContext";

const UpdateTextEditor = () => {
  const theme = useTheme();
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    if (!currentUser) {
      console.error("No user logged in");
      return;
    }

    if (!title.trim() || !body.trim()) {
      alert("Please enter a title and body for the post."); // or use a more user-friendly notification method
      return;
    }


    const update = {
      authorId: currentUser.uid,
      author: currentUser.displayName,
      authorEmail: currentUser.email,
      title,
      body,
      post_type: "update",
      timePosted: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "updates"), update);
      console.log("Document written with ID: ", docRef.id);

      await updateDoc(docRef, { postId: docRef.id });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  };

  const handleClear = () => {
    setTitle("");
    setBody("");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        maxWidth: "600px",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
          minHeight: "350px",
          minWidth: "300px",
        },
      }}
    >
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          p: 2,
          overflow: "hidden",
          margin: "auto",
          [theme.breakpoints.down("sm")]: {
            minHeight: "350px",
          },
        }}
      >
        <Typography variant="h5">Updates Post Editor</Typography>
        <TextField
          label="New Update Post Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          theme="snow"
          value={body}
          style={{
            height: "100px",
            width: "100%",
            [theme.breakpoints.down("sm")]: {
              width: "auto", // or '100%' if you want it to be full width on mobile
              maxWidth: "150px",
            },
          }}
          onChange={setBody}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 9 }}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
            style={{
              color: "black",
              backgroundColor: "#D9D9D9",
              borderRadius: "20px",
              width: "100px",
            }}
          >
            Post
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default UpdateTextEditor;
