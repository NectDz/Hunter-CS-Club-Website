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
    border: "2px solid #EAC566",
    padding: "30px",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This will make the background transparent dark
  }}
>
      <img
        src={img}
        alt={title}
        style={{
          width: "350px",
          height: "400px",
          maxWidth: "330px",
          maxHeight: "470px",
          objectFit: "cover",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          border: ".5px solid #000000",
        }}
      />
      <Typography
        variant="h5"
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
