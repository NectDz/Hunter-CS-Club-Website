import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

interface ActivityCreationProps {
  // Define props if needed
}

const tags = ["Speaker", "Social", "Workshop", "Project", "Hackathon"];

const ActivityCreation: React.FC<ActivityCreationProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleBodyChange = (value: string) => setBody(value);

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setThumbnail(event.target.files[0]);
    }
  };

  const handleTagChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTag(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to upload data to Firebase
    console.log(title, body, thumbnail, selectedTag);
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
          <FormControl fullWidth>
            <InputLabel>Tag</InputLabel>
            <Select
              value={selectedTag}
              onChange={handleTagChange}
              label="Tag"
            >
              {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
