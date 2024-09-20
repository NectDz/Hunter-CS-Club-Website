import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../../../../firebase-config";
import { SelectChangeEvent } from "@mui/material";

const tags = ["Speaker", "Social", "Workshop", "Project", "Hackathon"];

const ActivityCreation: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailName, setThumbnailName] = useState<string>(""); // State to store file name
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [rsvpLink, setRsvpLink] = useState<string>(""); // New RSVP link state
  const [eventDateTime, setEventDateTime] = useState<string>(""); // New event date/time state

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleBodyChange = (value: string) => setBody(value);

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setThumbnail(file);
      setThumbnailName(file.name); // Store the name of the file
    }
  };

  const handleTagChange = (event: SelectChangeEvent<string>) => {
    setSelectedTag(event.target.value as string);
  };

  const handleRsvpLinkChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRsvpLink(event.target.value); // Handle RSVP link input

  const handleEventDateTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setEventDateTime(event.target.value); // Handle event date/time input

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !body || !selectedTag || !rsvpLink || !eventDateTime) {
      console.error("All fields are required");
      return;
    }

    try {
      // Step 1: Create a new activity document and get the activityId
      const activityRef = await addDoc(collection(db, "activities"), {
        title,
        body,
        tag: selectedTag,
        rsvpLink, // Save RSVP link
        eventDateTime, // Save event date/time
        createdAt: Timestamp.now(), // Use Firestore Timestamp
      });

      const activityId = activityRef.id; // Get the generated document ID

      let thumbnailURL: string | null = null;

      // Step 2: If a thumbnail is provided, upload it using the activityId
      if (thumbnail) {
        const thumbnailRef = ref(
          storage,
          `thumbnails/${activityId}/${thumbnail.name}`
        );
        await uploadBytes(thumbnailRef, thumbnail);
        thumbnailURL = await getDownloadURL(thumbnailRef);
      }

      // Step 3: Update the activity document with the thumbnail URL and activityId
      await setDoc(doc(db, "activities", activityId), {
        title,
        body,
        thumbnailURL,
        tag: selectedTag,
        rsvpLink, // Save RSVP link
        eventDateTime, // Save event date/time
        createdAt: Timestamp.now(),
        activityId, // Store the activityId in the Firestore document
      });

      // Reset state after successful submission
      setTitle("");
      setBody("");
      setThumbnail(null);
      setThumbnailName(""); // Reset the file name
      setSelectedTag("");
      setRsvpLink(""); // Reset RSVP link
      setEventDateTime(""); // Reset event date/time

      console.log("Activity saved successfully with ID: ", activityId);
    } catch (error) {
      console.error("Error saving activity: ", error);
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit} style={{ flex: 1 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center" // Center the content horizontally
          sx={{
            height: "100%",
            padding: 4,
          }}
        >
          <Grid item sx={{ width: "100%", maxWidth: 1500 }}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 1500 }}>
            <TextField
              fullWidth
              label="RSVP Link"
              variant="outlined"
              value={rsvpLink}
              onChange={handleRsvpLinkChange}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 1500 }}>
            <TextField
              fullWidth
              label="Event Date and Time"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
              value={eventDateTime}
              onChange={handleEventDateTimeChange}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 1500, flex: 1 }}>
            <ReactQuill
              value={body}
              onChange={handleBodyChange}
              style={{ height: "100%", width: "100%" }} // Expand editor width
            />
          </Grid>
          <Grid item>
            <Button variant="contained" component="label">
              Upload Thumbnail
              <input type="file" hidden onChange={handleThumbnailChange} />
            </Button>
            {thumbnailName && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                Selected file: {thumbnailName}
              </Typography>
            )}
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 1500 }}>
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
    </Box>
  );
};

export default ActivityCreation;
