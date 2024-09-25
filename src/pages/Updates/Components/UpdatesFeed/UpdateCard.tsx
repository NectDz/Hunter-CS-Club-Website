import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";

interface UpdateCardProps {
  heading: string;
  body: string;
  avatarSrc: string;
  author: string;
  time: FirestoreTimestamp;
  thumbnailSrc?: string; 
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

function UpdateCard({
  heading,
  body,
  avatarSrc,
  author,
  time,
  thumbnailSrc,
}: UpdateCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string | undefined>("0px");
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight ?? 0;
    if (contentHeight > 160) {
      setShowButton(true);
      setMaxHeight("10em");
    } else {
      setShowButton(false);
    }
  }, []);

  const handleExpandClick = () => {
    setMaxHeight(expanded ? "10em" : `${contentRef.current?.scrollHeight}px`);
    setExpanded(!expanded);
  };

  const collapsedStyle = {
    maxHeight: expanded ? maxHeight : "9em",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  };

  const formatFirestoreTimestamp = (timestamp: FirestoreTimestamp) => {
    if (!timestamp || typeof timestamp.seconds !== "number") return "";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  console.log("Image Source:", thumbnailSrc); // Log to check the image source

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 900,
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
        border: ".5px solid black",
        // Increase card height for better display
        height: "auto",
      }}
    >
      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Typography variant="h4" component="div">
          {heading}
        </Typography>
        {thumbnailSrc && (
          <Box sx={{ mb: 2 }}>
            <img
              src={thumbnailSrc}
              alt="Update Thumbnail"
              style={{ width: "100%", borderRadius: "8px", maxHeight: "300px", objectFit: "cover" }} // Added maxHeight and objectFit
            />
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Avatar sx={{ marginRight: 2 }} src={avatarSrc} />
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Published By {author}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {formatFirestoreTimestamp(time)}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...collapsedStyle,
            typography: "body2",
          }}
          ref={contentRef}
        >
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
        {showButton && (
          <CardActions>
            <Button size="small" onClick={handleExpandClick}>
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
}

export default UpdateCard;
