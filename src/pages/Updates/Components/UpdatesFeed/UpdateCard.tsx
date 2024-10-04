import { useState, useRef, useLayoutEffect } from "react";
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
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useLayoutEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight ?? 0;
    console.log("Content Height:", contentHeight);
    if (contentHeight > 300) {
      setShowButton(true);
      setMaxHeight("15em");
    } else {
      setShowButton(false);
    }
  }, [body, thumbnailSrc, imageLoaded]);

  const handleExpandClick = () => {
    setMaxHeight(expanded ? "15em" : `${contentRef.current?.scrollHeight}px`);
    setExpanded(!expanded);
  };

  const collapsedStyle = {
    maxHeight: expanded ? maxHeight : "15em",
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

  console.log("Image Source:", thumbnailSrc);

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 900,
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
        border: ".5px solid black",
        height: "auto",
      }}
    >
      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: "center", color: "#4d2e91", fontWeight: "bold" }}
        >
          {heading}
        </Typography>
        <Box
          sx={{
            ...collapsedStyle,
          }}
          ref={contentRef}
        >
          {thumbnailSrc && (
            <Box sx={{ mb: 2 }}>
              <img
                src={thumbnailSrc}
                alt="Update Thumbnail"
                onLoad={() => setImageLoaded(true)}
                style={{
                  width: "100%",
                  maxHeight: "500px", // Adjust the maxHeight as needed
                  objectFit: "cover", // or 'contain' depending on preference
                  borderRadius: "8px",
                }}
              />
            </Box>
          )}
          <Box sx={{ typography: "body2" }}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Box>
        </Box>
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
        {showButton && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardActions>
              <Button size="small" onClick={handleExpandClick}>
                {expanded ? "Read Less" : "Read More"}
              </Button>
            </CardActions>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default UpdateCard;
