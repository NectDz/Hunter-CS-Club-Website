import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Grid, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../../../firebase-config';

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

  // const handleTagChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSelectedTag(event.target.value as string);
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!title || !body || !selectedTag) {
      console.error("All fields are required");
      return;
    }
    
    try {
      let thumbnailURL: string | null = null;
      
      if (thumbnail) {
        // Upload thumbnail
        const thumbnailRef = ref(storage, `thumbnails/${thumbnail.name}`);
        await uploadBytes(thumbnailRef, thumbnail);
        thumbnailURL = await getDownloadURL(thumbnailRef);
      }
      
      // Add data to Firestore
      await addDoc(collection(db, 'activities'), {
        title,
        body,
        thumbnailURL,
        tag: selectedTag,
        createdAt: new Date()  // Use Firestore Timestamp here if needed
      });
    
      // Reset state after successful submission
      setTitle("");
      setBody("");
      setThumbnail(null);
      setSelectedTag("");
    
      console.log("Activity saved successfully");
    } catch (error) {
      console.error("Error saving activity: ", error);
    }
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
              // onChange={handleTagChange}
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

