import { useState, useEffect } from "react";
import { Box, Skeleton, Button, Typography } from "@mui/material";
import UpdateCard from "../../../Updates/Components/UpdatesFeed/UpdateCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { boardMembers } from "../../../Home/Carousel/EBoardCarousel"; // Ensure this is the correct path
import update from "../consts/update.jpg";
import { Link as RouterLink } from 'react-router-dom'; 

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

const getAvatarByAuthor = (authorName: string): string => {
  const member = boardMembers.find(
    (member) => member.name.toLowerCase() === authorName.toLowerCase()
  );
  return member ? member.imageUrl : "/path/to/default/avatar.jpg"; // Replace with your default avatar path
};

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
      <Box
        sx={{
          maxWidth: 900,
          margin: "auto",
          padding: 2,
        }}
      >
        <Skeleton variant="rectangular" height={200} />
      </Box>
    );
  }

  if (updates.length === 0) {
    return <div>No updates available.</div>; // Handle case with no updates
  }

  return (
    <Box
      sx={{
        padding: 4,
        color: "white",
        backgroundImage: `url(${update})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(77, 46, 145, 1)",
        backgroundBlendMode: "overlay",
        borderTop: "2px solid #EAC566",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#EAC566" }}
      >
        CLUB UPDATES
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Check out our latest updates and news here!
      </Typography>
      <Box sx={{ maxWidth: 800, margin: "auto" }}>
        {updates.map((update) => (
          <UpdateCard
            key={update.id}
            heading={update.title}
            body={update.body}
            avatarSrc={getAvatarByAuthor(update.author)}
            author={update.author}
            time={update.timePosted || { seconds: 0, nanoseconds: 0 }}
            thumbnailSrc={update.thumbnailURL}
          />
        ))}
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 5 }}>
        <Button
          variant="outlined"
          sx={{
            color: "#EAC566",
            border: "2px solid #EAC566",
            "&:hover": {
              color: "#f4e2b2",
              border: "2px solid #f4e2b2",
            },
            borderRadius: 0,
            padding: "15px 20px",
            fontSize: "1.2rem",
          }}
          onClick={() => (window.location.href = "/Updates")} // Replace with your actual route
        >
          MORE UPDATES
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateCarousel;
