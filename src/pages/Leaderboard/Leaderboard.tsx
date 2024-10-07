import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Container,
  Button,
  Box,
  TextField,
} from "@mui/material";
import Papa from "papaparse";

interface RawLeaderboardEntry {
  firstName: string;
  lastName: string;
  points: string;
}

interface UnrankedLeaderboardEntry {
  firstName: string;
  lastName: string;
  points: number;
}

interface LeaderboardEntry extends UnrankedLeaderboardEntry {
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse<RawLeaderboardEntry>(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // Convert points to number and map to UnrankedLeaderboardEntry
        const parsedData: UnrankedLeaderboardEntry[] = results.data
          .map((row) => ({
            firstName: row.firstName,
            lastName: row.lastName,
            points: parseFloat(row.points),
          }))
          .filter((row) => row.firstName && row.lastName && !isNaN(row.points));

        // Sort data by points descending
        parsedData.sort((a, b) => b.points - a.points);

        // Assign ranks
        const rankedData: LeaderboardEntry[] = parsedData.map(
          (entry, index) => ({
            ...entry,
            rank: index + 1,
          })
        );

        setData(rankedData);
      },
      error: function (error) {
        console.error("Error parsing CSV:", error);
      },
    });
  };

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    `${row.firstName} ${row.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Container
      sx={{
        flexGrow: 1,
        paddingY: "80px",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        FAANG Office Tour Point Leaderboard
      </Typography>
      <Box mb={2}>
        <input
          accept=".csv"
          style={{ display: "none" }}
          id="csv-input"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="csv-input">
          <Button variant="contained" component="span">
            Upload CSV
          </Button>
        </label>
      </Box>
      {data.length > 0 && (
        <>
          <Box mb={2}>
            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
          <Paper>
            <Table>
              <TableHead
                sx={{
                  backgroundColor: "#4d2e91", // Purple background
                  "& th": {
                    color: "#ffffff", // White text
                  },
                }}
              >
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Rank</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow
                    key={`${row.firstName}-${row.lastName}-${row.rank}`}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#c9bce6" : "white", // Light purple zebra pattern
                    }}
                  >
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {row.rank}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {row.firstName}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {row.lastName}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#822af5",
                        fontWeight: "bold",
                      }}
                    >
                      {row.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </>
      )}
    </Container>
  );
};

export default Leaderboard;
