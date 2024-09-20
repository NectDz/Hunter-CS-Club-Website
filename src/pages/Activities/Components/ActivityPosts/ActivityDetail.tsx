import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import {
  Typography,
  Avatar,
  Box,
  CircularProgress,
  Container,
} from "@mui/material";

interface Activity {
  title: string;
  thumbnailURL: string;
  body: string;
  author: string;
  createdAt: {
    seconds: number;
  };
}

const ActivityDetail = () => {
  const { id } = useParams(); // Get activity ID from the URL
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      const docRef = doc(db, "activities", id!); // Fetch the document using the id
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setActivity(docSnap.data() as Activity);
      }
      setLoading(false);
    };

    fetchActivity();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!activity) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6">Activity not found</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, px: { xs: 2, md: 3 } }}>
      {/* Thumbnail Section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={4}
        sx={{
          width: "100%", // Ensure container takes full width
        }}
      >
        <Avatar
          variant="square"
          src={activity.thumbnailURL}
          alt={activity.title}
          sx={{
            width: "100%", // Make the image take full width of its container
            maxWidth: { xs: "90%", sm: "80%", md: "60%" }, // Adjust width responsively
            height: "auto", // Ensure the height scales with width
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Title Section */}
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // Adjust title size for mobile
        }}
      >
        {activity.title}
      </Typography>

      {/* Metadata Section */}
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }} // Responsive font size
      >
        Posted on:{" "}
        {new Date(activity.createdAt.seconds * 1000).toLocaleDateString(
          "en-US",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        )}
      </Typography>

      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        mb={4}
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
      >
        Author: {activity.author}
      </Typography>

      {/* Content Section */}
      <Box
        mb={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "90%", md: "80%" }, // Ensure text is not too wide
          textAlign: "justify",
        }}
      >
        <Typography
          variant="body1"
          component="p"
          paragraph
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem" }, // Adjust font size
            lineHeight: { xs: 1.5, sm: 1.7 }, // Better readability on mobile
          }}
        >
          {activity.body}
        </Typography>
      </Box>
    </Container>
  );
};

export default ActivityDetail;
