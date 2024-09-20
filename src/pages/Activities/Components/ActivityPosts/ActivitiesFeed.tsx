import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Skeleton,
  Pagination,
} from "@mui/material";
import ActivityCard from "./ActivityCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";

interface Activity {
  id: string;
  title: string;
  body: string;
  thumbnailURL: string;
  tag: string;
  createdAt: FirestoreTimestamp;
  author: string;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const ActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 4; // Display 4 activities per page

  useEffect(() => {
    const fetchActivities = async () => {
      const activitiesCollection = collection(db, "activities");
      const activitiesSnapshot = await getDocs(activitiesCollection);
      const activitiesList = activitiesSnapshot.docs
        .map((doc) => {
          const { id, ...data } = doc.data() as Activity;
          return { id: doc.id, ...data };
        })
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // Sort by creation date

      setActivities(activitiesList);
      setLoading(false);
    };

    fetchActivities();
  }, []);

  // Handle pagination
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  if (loading) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {Array.from(new Array(4)).map((_, index) => (
            <Grid item xs={12} sm={6} key={index}>
              {" "}
              {/* Adjust grid to 2x2 */}
              <Card
                elevation={0}
                sx={{ maxWidth: 500, width: "100%", margin: "auto" }}
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
        {currentActivities.map((activity) => (
          <Grid item xs={12} sm={6} key={activity.id}>
            {" "}
            {/* 2 items per row */}
            <ActivityCard
              id={activity.id}
              thumbnailSrc={activity.thumbnailURL}
              activityName={activity.title}
              activityTag={activity.tag}
              description={activity.body}
              postedTime={activity.createdAt}
            />
          </Grid>
        ))}
      </Grid>

      {/* Show Pagination only if there are more than 4 activities */}
      {activities.length > activitiesPerPage && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={Math.ceil(activities.length / activitiesPerPage)} // Total number of pages
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ActivityFeed;
