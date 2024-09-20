import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ActivityCardProps {
  thumbnailSrc: string;
  activityName: string;
  activityTag: string;
  description: string;
  postedTime: FirestoreTimestamp;
  eventDateTime: string;
  eventStartTime: string;
  eventEndTime: string;
  location: string;
  rsvpLink: string;
  buttonText?: string;
  id: string;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

function ActivityCard({
  thumbnailSrc,
  activityName,
  activityTag,
  postedTime,
  location,
  eventDateTime,
  eventStartTime,
  eventEndTime,
  rsvpLink,
  buttonText = "RSVP",
  id,
}: ActivityCardProps) {
  const navigate = useNavigate();

  const formatDate = (timestamp: FirestoreTimestamp) => {
    if (!timestamp || typeof timestamp.seconds !== "number") return "";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US");
  };

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

  const handleClick = () => {
    navigate(`/activities/${id}`);
  };

  // Combine eventDateTime and eventStartTime into a full Date object
  const eventDateTimeObject = new Date(`${eventDateTime}T${eventStartTime}`);
  const currentTime = new Date();

  // Check if the event has passed
  const isEventInFuture = currentTime <= eventDateTimeObject;

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 400,
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
          elevation: 2,
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Avatar
            variant="square"
            sx={{
              width: "100%",
              height: 350,
              marginBottom: 2,
              borderRadius: "16px",
              objectFit: "cover",
            }}
            src={thumbnailSrc}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="subtitle1" color="text.secondary">
            {activityTag}
          </Typography>
          {isEventInFuture && (
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                window.open(rsvpLink, "_blank");
              }}
              sx={{ ml: 2 }} // Margin to separate the button from the tag
            >
              {buttonText}
            </Button>
          )}
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {activityName}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Event on: {formatEventDate(eventDateTime)}{" "}
          {formatTime(eventStartTime)} - {formatTime(eventEndTime)}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Location: {location}
        </Typography>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 1, fontStyle: "italic" }}
        >
          Posted on {formatDate(postedTime)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
