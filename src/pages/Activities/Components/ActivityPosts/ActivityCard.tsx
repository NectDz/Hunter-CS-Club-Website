import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ActivityCardProps {
  thumbnailSrc: string;
  activityName: string;
  activityTag: string;
  description: string;
  postedTime: FirestoreTimestamp;
  buttonText?: string;
  id: string; // Add id for navigation
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

function ActivityCard({
  thumbnailSrc,
  activityName,
  activityTag,
  description,
  postedTime,
  buttonText = "RSVP",
  id, // Use id for routing
}: ActivityCardProps) {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const formatFirestoreTimestamp = (timestamp: FirestoreTimestamp) => {
    if (!timestamp || typeof timestamp.seconds !== "number") return "";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Function to handle description truncation
  const truncateDescription = (text: string, length: number) => {
    if (text.length > length && !showFullDescription) {
      return `${text.substring(0, length)}...`;
    }
    return text;
  };

  // Handle the card click to navigate to the details page
  const handleClick = () => {
    navigate(`/activities/pkqYehARlm5E5xMeAQYy`); // Navigate to the activity detail page
  };

  return (
    <Card
      elevation={2}
      sx={{
        maxWidth: 350,
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer", // Make the card look clickable
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      onClick={handleClick} // Attach click handler to the whole card
    >
      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Avatar
            variant="square"
            sx={{
              width: "100%",
              height: 200,
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
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click from firing when button is clicked
              // Add your button click logic here
            }}
          >
            {buttonText}
          </Button>
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {activityName}
        </Typography>
        <Tooltip title={description.length > 100 ? description : ""} arrow>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ cursor: description.length > 100 ? "pointer" : "default" }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click on text click
              setShowFullDescription(!showFullDescription);
            }}
          >
            {truncateDescription(description, 100)}{" "}
            {description.length > 100 && (
              <Typography
                component="span"
                sx={{ color: "primary.main", fontSize: "0.9rem" }}
              >
                {showFullDescription ? "Show less" : "Read more"}
              </Typography>
            )}
          </Typography>
        </Tooltip>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ mt: 1, fontStyle: "italic" }}
        >
          Posted on {formatFirestoreTimestamp(postedTime)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
