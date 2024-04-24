import { Grid, Typography } from "@mui/material";
import Flower from "../../../Components/common/Flower/Flower";

interface ValueCardProps {
  label: string;
  text: string;
  color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ label, text, color }) => {
  return (
    <Grid item sx={{ maxWidth: "260px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Flower color={color} />
      </div>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{ marginBottom: "16px", marginTop: "20px" }}
      >
        {label}
      </Typography>
      <Typography>{text}</Typography>
    </Grid>
  );
};

export default ValueCard;
