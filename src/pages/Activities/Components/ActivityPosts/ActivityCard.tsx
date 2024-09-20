import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Box,
} from "@mui/material";

interface ActivityCardProps {
  thumbnailSrc: string;
  activityName: string;
  activityTag: string;
  description: string;
  postedTime: FirestoreTimestamp;
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
}: ActivityCardProps) {
  const formatFirestoreTimestamp = (timestamp: FirestoreTimestamp) => {
    if (!timestamp || typeof timestamp.seconds !== "number") return "";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 300,
        borderRadius: "16px",
        overflow: "hidden",
        margin: "auto",
      }}
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
          <Button size="small" variant="contained" color="primary">
            RSVP
          </Button>
        </Box>
        <Typography variant="h5" component="div">
          {activityName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Posted on {formatFirestoreTimestamp(postedTime)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
