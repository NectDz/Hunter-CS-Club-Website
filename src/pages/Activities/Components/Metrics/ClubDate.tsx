import { Box, Typography } from "@mui/material";
import { getYearsMonthsDaysFromDate } from "../../../../utils";

const CLUB_START_DATE = new Date("August 1, 2023");
const { years, months, days } = getYearsMonthsDaysFromDate(CLUB_START_DATE);

const ClubDate = () => {
  return (
    <Box display="flex" justifyContent="right" gap={2}>
      <Box display={years > 0 ? "" : "none"}>
        <Typography variant="body1" align="center">
          {years}
        </Typography>
        <Typography variant="body1">YEAR{years > 1 && "S"}</Typography>
      </Box>
      <Box>
        <Typography variant="body1" align="center">
          {months}
        </Typography>
        <Typography variant="body1">MONTHS</Typography>
      </Box>
      <Box>
        <Typography variant="body1" align="center">
          {days}
        </Typography>
        <Typography variant="body1">DAY{days > 1 && "S"}</Typography>
      </Box>
    </Box>
  );
};

export default ClubDate;
