// import React, { useState, useEffect } from "react";
// import { Box, Grid, Card, CardHeader, CardContent, Skeleton } from "@mui/material";
// import ActivityCard from "./ActivityCard";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../../../firebase-config";

// interface Activity {
//   id: string;
//   title: string;
//   body: string;
//   thumbnailURL: string;
//   tag: string;
//   createdAt: FirestoreTimestamp;
//   author: string; // Ensure that this is present
// }

// interface FirestoreTimestamp {
//   seconds: number;
//   nanoseconds: number;
// }

// const ActivityFeed = () => {
//   const [activities, setActivities] = useState<Activity[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       const activitiesCollection = collection(db, "activities");
//       const activitiesSnapshot = await getDocs(activitiesCollection);
//       const activitiesList = activitiesSnapshot.docs
//         .map((doc) => {
//           const { id, ...data } = doc.data() as Activity;
//           return { id: doc.id, ...data };
//         })
//         .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds); // Sort by creation date

//       setActivities(activitiesList);
//       setLoading(false);
//     };

//     fetchActivities();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2}>
//           {Array.from(new Array(3)).map((_, index) => (
//             <Grid item xs={12} key={index}>
//               <Card
//                 elevation={0}
//                 sx={{ maxWidth: 900, width: "100%", margin: "auto" }}
//               >
//                 <CardHeader
//                   avatar={
//                     <Skeleton variant="circular" width={40} height={40} />
//                   }
//                   title={<Skeleton variant="text" width="60%" />}
//                   subheader={<Skeleton variant="text" width="40%" />}
//                 />
//                 <CardContent>
//                   <Skeleton variant="rectangular" height={118} />
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         {activities.map((activity) => (
//           <Grid item xs={12} key={activity.id}>
//             <ActivityCard
//               thumbnailSrc={activity.thumbnailURL}
//               activityName={activity.title}
//               activityTag={activity.tag}
//               description={activity.body}
//               postedTime={activity.createdAt}
//               authorName={activity.author}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ActivityFeed;
