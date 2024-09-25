import { useState } from "react";
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
import { db, storage } from "../../../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../../Context/AuthContext";

const UpdateTextEditor = () => {
  const theme = useTheme();
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailName, setThumbnailName] = useState<string>("");

  const handleThumbnailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setThumbnail(file);
      setThumbnailName(file.name);
    }
  };


  const handleSubmit = async () => {
    if (!currentUser) {
      console.error("No user logged in");
      return;
    }

    if (!title.trim() || !body.trim()) {
      alert("Please enter a title and body for the update.");
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
      console.log("Update document written with ID: ", docRef.id);

      // Handle thumbnail upload
      if (thumbnail) {
        const thumbnailRef = ref(storage, `thumbnails/updates/${docRef.id}/${thumbnail.name}`);
        await uploadBytes(thumbnailRef, thumbnail);
        const thumbnailURL = await getDownloadURL(thumbnailRef);

        // Update the document with the thumbnail URL
        await updateDoc(docRef, { thumbnailURL }); // Update existing document
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleClear = () => {
    setTitle("");
    setBody("");
    setThumbnail(null);
    setThumbnailName("");
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
          label="Update Post Title"
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
          }}
          onChange={setBody}
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label" fullWidth>
            Upload Thumbnail
            <input type="file" hidden onChange={handleThumbnailChange} />
          </Button>
          {thumbnailName && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {thumbnailName}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
            sx={{
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
