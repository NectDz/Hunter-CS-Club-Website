import { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent, Skeleton, Button, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";

interface Update {
  id: string;
  title: string;
  body: string;
  avatarSrc?: string;
  author: string;
  timePosted?: FirestoreTimestamp; // Keep this optional for safety
  thumbnailURL: string; 
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const UpdateCarousel = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      const updatesCollection = collection(db, "updates");
      const updatesSnapshot = await getDocs(updatesCollection);
      const updatesList = updatesSnapshot.docs
        .map((doc) => {
          const { id, ...data } = doc.data() as Update;
          return { id: doc.id, ...data };
        })
        .sort((a, b) => {
          const aTime = a.timePosted?.seconds || 0;
          const bTime = b.timePosted?.seconds || 0;
          return bTime - aTime;
        });

      setUpdates(updatesList);
      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return (
      <Box sx={{ maxWidth: 900, margin: "auto", padding: 2 }}>
        <Card elevation={0}>
          <CardHeader
            avatar={<Skeleton variant="circular" width={40} height={40} />}
            title={<Skeleton variant="text" width="60%" />}
            subheader={<Skeleton variant="text" width="40%" />}
          />
          <CardContent>
            <Skeleton variant="rectangular" height={118} />
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (updates.length === 0) {
    return <div>No updates available.</div>; // Handle case with no updates
  }

  const latestUpdate = updates[0]; // Get the latest update

  // Strip HTML tags from body text
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        CLUB UPDATES
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Check out our latest updates and news here!
      </Typography>
      <Card 
        elevation={0} 
        sx={{ backgroundColor: "#f5f5f5", padding: 2 }} // Light grey background
      >
        <CardHeader
          title={latestUpdate.title}
          subheader={`By ${latestUpdate.author} - ${new Date(latestUpdate.timePosted?.seconds * 1000).toLocaleDateString()}`}
        />
        <CardContent>
          <Typography variant="body2">
            {stripHtml(latestUpdate.body).length > 100 
              ? `${stripHtml(latestUpdate.body).substring(0, 100)}...` 
              : stripHtml(latestUpdate.body)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => window.location.href = '/updates'} // Replace with your actual route
          >
            MORE UPDATES
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UpdateCarousel;
