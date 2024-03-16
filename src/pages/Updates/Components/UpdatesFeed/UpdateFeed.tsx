import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import UpdateCard from "./UpdateCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";

// Define the type for your update data
interface Update {
  id: string;
  title: string;
  body: string;
  avatarSrc?: string;
  author: string;
  timePosted: FirestoreTimestamp;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const UpdateFeed = () => {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const updatesCollection = collection(db, "updates");
      const updatesSnapshot = await getDocs(updatesCollection);
      const updatesList = updatesSnapshot.docs
        .map((doc) => {
          const { id, ...data } = doc.data() as Update;
          return { id: doc.id, ...data };
        })
        .sort((a, b) => b.timePosted.seconds - a.timePosted.seconds); // Sort by timePosted in descending order

      setUpdates(updatesList);
    };

    fetchUpdates();
  }, []);

  console.log(updates);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {updates.map((update) => (
          <Grid item xs={12} key={update.id}>
            <UpdateCard
              heading={update.title}
              body={update.body}
              avatarSrc={"/path/to/avatar.jpg"}
              author={update.author}
              time={update.timePosted}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpdateFeed;
