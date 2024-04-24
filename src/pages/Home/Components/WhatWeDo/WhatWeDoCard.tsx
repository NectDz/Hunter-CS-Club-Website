import { Grid, Typography } from "@mui/material";

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
  return (
    <Grid
      item
      sx={{
        border: "3px solid #ffffff",
        padding: "20px",
        borderTopRightRadius: "200px",
        borderTopLeftRadius: "200px",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{
          width: "300px",
          height: "350px",
          maxWidth: "300px",
          maxHeight: "350px",
          objectFit: "cover",
          borderTopRightRadius: "200px",
          borderTopLeftRadius: "200px",
          border: ".5px solid #000000",
        }}
      />
      <Typography
        variant="h6"
        color="#EAC566"
        align="center"
        sx={{ marginTop: "12px" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="#ffffff" sx={{ maxWidth: "300px" }}>
        {description}
      </Typography>
    </Grid>
  );
};

export default WhatWeDoCard;
