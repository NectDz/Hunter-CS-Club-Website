import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Grid, TextField } from "@mui/material";

interface ActivityCreationProps {
  // Define props if needed
}

const ActivityCreation: React.FC<ActivityCreationProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleBodyChange = (value: string) => setBody(value);
  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setThumbnail(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to upload data to Firebase
    console.log(title, body, thumbnail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
          />
        </Grid>
        <Grid item>
          <ReactQuill value={body} onChange={handleBodyChange} />
        </Grid>
        <Grid item>
          <Button variant="contained" component="label">
            Upload Thumbnail
            <input type="file" hidden onChange={handleThumbnailChange} />
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Save Activity
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ActivityCreation;
