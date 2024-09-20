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
  Paper,
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
  const [thumbnailName, setThumbnailName] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [rsvpLink, setRsvpLink] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>("");
  const [eventStartTime, setEventStartTime] = useState<string>("");
  const [eventEndTime, setEventEndTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleBodyChange = (value: string) => setBody(value);

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setThumbnail(file);
      setThumbnailName(file.name);
    }
  };

  const handleTagChange = (event: SelectChangeEvent<string>) => {
    setSelectedTag(event.target.value as string);
  };

  const handleRsvpLinkChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRsvpLink(event.target.value);

  const handleEventDateTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEventDateTime(event.target.value);
  };

  const handleEventStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setEventStartTime(event.target.value);

  const handleEventEndTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setEventEndTime(event.target.value);

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLocation(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !title ||
      !body ||
      !selectedTag ||
      !rsvpLink ||
      !eventDateTime ||
      !eventStartTime ||
      !eventEndTime ||
      !location
    ) {
      console.error("All fields are required");
      return;
    }

    try {
      const activityRef = await addDoc(collection(db, "activities"), {
        title,
        body,
        tag: selectedTag,
        rsvpLink,
        eventDateTime,
        eventStartTime,
        eventEndTime,
        location,
        createdAt: Timestamp.now(),
      });

      const activityId = activityRef.id;

      let thumbnailURL: string | null = null;

      if (thumbnail) {
        const thumbnailRef = ref(
          storage,
          `thumbnails/${activityId}/${thumbnail.name}`
        );
        await uploadBytes(thumbnailRef, thumbnail);
        thumbnailURL = await getDownloadURL(thumbnailRef);
      }

      await setDoc(doc(db, "activities", activityId), {
        title,
        body,
        thumbnailURL,
        tag: selectedTag,
        rsvpLink,
        eventDateTime,
        eventStartTime,
        eventEndTime,
        location,
        createdAt: Timestamp.now(),
        activityId,
      });

      setTitle("");
      setBody("");
      setThumbnail(null);
      setThumbnailName("");
      setSelectedTag("");
      setRsvpLink("");
      setEventDateTime("");
      setEventStartTime("");
      setEventEndTime("");
      setLocation("");

      console.log("Activity saved successfully with ID: ", activityId);
    } catch (error) {
      console.error("Error saving activity: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h3" mb={2} fontWeight="bold" align="center">
            Create New Activity
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={handleTitleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="RSVP Link"
                variant="outlined"
                value={rsvpLink}
                onChange={handleRsvpLinkChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Event Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={eventDateTime}
                onChange={handleEventDateTimeChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Start Time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={eventStartTime}
                onChange={handleEventStartTimeChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="End Time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={eventEndTime}
                onChange={handleEventEndTimeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                value={location}
                onChange={handleLocationChange}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill value={body} onChange={handleBodyChange} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Upload Thumbnail
                <input type="file" hidden onChange={handleThumbnailChange} />
              </Button>
              {thumbnailName && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected file: {thumbnailName}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, borderRadius: 2 }}
              >
                Save Activity
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ActivityCreation;
