import { Grid, Typography, useMediaQuery, useTheme, Box } from "@mui/material";

interface WhatWeDoCardProps {
  img: string;
  title: string;
  description: string;
}

const WhatWeDoCard: React.FC<WhatWeDoCardProps> = ({
  img,
  title,
  description,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      sx={{
        border: "2px solid #EAC566",
        borderRadius: 5,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 3,
        maxWidth: 350,
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 5,
          border: "0.5px solid #000",
        }}
      >
        <Box
          component="img"
          src={img}
          alt={title}
          sx={{
            width: isMobile ? 250 : 350,
            height: isMobile ? 250 : 350,
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography variant="h5" color="#EAC566" align="center" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="#FFFFFF" align="center" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Grid>
  );
};

export default WhatWeDoCard;
