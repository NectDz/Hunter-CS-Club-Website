import { useState, useEffect } from "react";
import { Box, Card, CardHeader, CardContent, Skeleton } from "@mui/material";
import UpdateCard from "./UpdateCard";
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
  const [latestUpdate, setLatestUpdate] = useState<Update | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestUpdate = async () => {
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

      if (updatesList.length > 0) {
        setLatestUpdate(updatesList[0]); // Get the latest update
      }
      setLoading(false);
    };

    fetchLatestUpdate();
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

  if (!latestUpdate) {
    return <div>No updates available.</div>; // Handle case with no updates
  }

  return (
    <Box sx={{ padding: 2 }}>
      <UpdateCard
        heading={latestUpdate.title}
        body={latestUpdate.body}
        avatarSrc={latestUpdate.avatarSrc || "/path/to/avatar.jpg"}
        author={latestUpdate.author}
        time={latestUpdate.timePosted || { seconds: 0, nanoseconds: 0 }} // Provide default value
        thumbnailSrc={latestUpdate.thumbnailURL}
      />
    </Box>
  );
};

export default UpdateCarousel;
