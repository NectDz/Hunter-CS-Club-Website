import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

interface WhatWeDoCardProps {
  img: any;
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
        padding: "30px",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // This will make the background transparent dark
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: isMobile ? "250px" : "350px",
            height: isMobile ? "250px" : "350px",
            maxWidth: isMobile ? "300px" : "300px",
            maxHeight: isMobile ? "300px" : "3500px",
            objectFit: "cover",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            border: ".5px solid #000000",
          }}
        />
      </div>
      <Typography
        variant="h5"
        color="#EAC566"
        align="center"
        sx={{ marginTop: "12px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="#ffffff"
        align="center"
        sx={{ maxWidth: "300px" }}
      >
        {description}
      </Typography>
    </Grid>
  );
};

export default WhatWeDoCard;
