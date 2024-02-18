import React, { useState } from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const TextEditor = () => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Announcement Post Editor
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <TextField
          label="Header"
          variant="outlined"
          fullWidth
          margin="normal"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <Typography variant="body1" gutterBottom>
          Body
        </Typography>
        <ReactQuill theme="snow" value={body} onChange={setBody} />
      </Paper>
    </Box>
  );
};

export default TextEditor;
