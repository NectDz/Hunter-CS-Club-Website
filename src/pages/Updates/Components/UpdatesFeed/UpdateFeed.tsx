import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Skeleton,
} from "@mui/material";
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
  thumbnailSrc?: string; // Added thumbnailSrc
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const UpdateFeed = () => {
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {Array.from(new Array(3)).map((_, index) => (
            <Grid item xs={12} key={index}>
              <Card
                elevation={0}
                sx={{ maxWidth: 900, width: "100%", margin: "auto" }}
              >
                <CardHeader
                  avatar={
                    <Skeleton variant="circular" width={40} height={40} />
                  }
                  title={<Skeleton variant="text" width="60%" />}
                  subheader={<Skeleton variant="text" width="40%" />}
                />
                <CardContent>
                  <Skeleton variant="rectangular" height={118} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {updates.map((update) => (
          <Grid item xs={12} key={update.id}>
            <UpdateCard
              heading={update.title}
              body={update.body}
              avatarSrc={update.avatarSrc || "/path/to/avatar.jpg"}
              author={update.author}
              time={update.timePosted || { seconds: 0, nanoseconds: 0 }} // Provide default value here
              imageSrc={update.thumbnailSrc} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpdateFeed;
