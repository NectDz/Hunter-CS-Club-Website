import React, { useState, useRef, useEffect } from "react";
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
  time: string;
}

function UpdateCard({
  heading,
  body,
  avatarSrc,
  author,
  time,
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
    maxHeight: expanded ? maxHeight : "10em",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out",
  };

  return (
    <Card sx={{ maxWidth: 900, borderRadius: "16px", overflow: "hidden" }}>
      <CardContent sx={{ "&:last-child": { paddingBottom: 2 } }}>
        <Typography variant="h4" component="div">
          {heading}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Avatar sx={{ marginRight: 2 }} src={avatarSrc} />
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Published By {author} {time}
            </Typography>
          </Box>
        </Box>
        <div style={collapsedStyle} ref={contentRef}>
          <Typography paragraph variant="body2">
            {body}
          </Typography>
        </div>
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
