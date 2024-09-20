import { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useTheme, useMediaQuery } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import ActivityCard from "../../../Activities/Components/ActivityPosts/ActivityCard"; // Assuming ActivityCard is your card component for displaying activities.

interface Activity {
  id: string;
  title: string;
  body: string;
  eventDateTime: string;
  eventStartTime: string;
  eventEndTime: string;
  location: string;
  rsvpLink: string;
  thumbnailURL: string;
  tag: string;
  createdAt: FirestoreTimestamp;
  author: string;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const ActivityCarousel = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const itemsPerPage = isMobile ? 1 : 3; // 1 activity for mobile, 3 for desktop

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

  const chunkedActivities = [];
  for (let i = 0; i < 3; i += itemsPerPage) {
    chunkedActivities.push(activities.slice(i, i + itemsPerPage));
  }

  if (loading) {
    return <p>Loading activities...</p>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isMobile ? (
        <Carousel
          autoPlay={true}
          interval={8000}
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={true}
          stopAutoPlayOnHover={false}
          swipe={true}
          fullHeightHover={false}
        >
          {chunkedActivities.map((chunk, index) => (
            <Box key={index} display="flex" justifyContent="center">
              {chunk.map((activity, i) => (
                <Box
                  key={i}
                  p={1}
                  flex={1}
                  display="flex"
                  justifyContent="center"
                >
                  <ActivityCard
                    id={activity.id}
                    rsvpLink={activity.rsvpLink}
                    location={activity.location}
                    eventDateTime={activity.eventDateTime}
                    eventStartTime={activity.eventStartTime}
                    eventEndTime={activity.eventEndTime}
                    thumbnailSrc={activity.thumbnailURL}
                    activityName={activity.title}
                    activityTag={activity.tag}
                    description={activity.body}
                    postedTime={activity.createdAt}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Carousel>
      ) : (
        <Grid container spacing={0}>
          {activities.slice(0, 3).map((activity) => (
            <Grid
              item
              xs={12} // Full width on extra small devices
              sm={6}
              md={4}
              lg={4}
              sx={{
                maxWidth: isTablet ? 280 : 350, // Set smaller width for medium devices
                margin: "auto", // Centering the cards on medium devices
              }}
              key={activity.id}
            >
              <ActivityCard
                id={activity.id}
                rsvpLink={activity.rsvpLink}
                location={activity.location}
                eventDateTime={activity.eventDateTime}
                eventStartTime={activity.eventStartTime}
                eventEndTime={activity.eventEndTime}
                thumbnailSrc={activity.thumbnailURL}
                activityName={activity.title}
                activityTag={activity.tag}
                description={activity.body}
                postedTime={activity.createdAt}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ActivityCarousel;
