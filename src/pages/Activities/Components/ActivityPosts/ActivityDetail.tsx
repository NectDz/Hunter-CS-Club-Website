import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import GridItem from "../../../../Components/common/GridItem";
import Button from "@mui/material/Button";

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
  eventDateTime: string;
  eventStartTime: string;
  eventEndTime: string;
  location: string;
  rsvpLink: string;
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
        width="10%"
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

  const eventDateTimeObject = new Date(
    `${activity.eventDateTime}T${activity.eventStartTime}`
  );
  const currentTime = new Date();

  const isEventInFuture = currentTime <= eventDateTimeObject;

  const formatEventDate = (dateString: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return "";

    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          paddingY: "80px",
          padding: "0",
          margin: "0",
        }}
      >
        <GridItem padding={0}>
          {/* Thumbnail Section */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={4}
            sx={{
              width: "100%",
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

          {isEventInFuture && (
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                window.open(activity.rsvpLink, "_blank");
              }}
            >
              {"RSVP"}
            </Button>
          )}

          {/* Metadata Section */}
          <Typography variant="subtitle1" color="text.secondary">
            Event on: {formatEventDate(activity.eventDateTime)}{" "}
            {formatTime(activity.eventStartTime)} -{" "}
            {formatTime(activity.eventEndTime)}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Location: {activity.location}
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
              component="div" // Change to div to contain HTML elements
              paragraph
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem" }, // Adjust font size
                lineHeight: { xs: 1.5, sm: 1.7 }, // Better readability on mobile
              }}
              dangerouslySetInnerHTML={{
                __html: activity.body, // Sanitize and render HTML content
              }}
            />
          </Box>
        </GridItem>
      </Box>
    </Container>
  );
};

export default ActivityDetail;
