import { Box, Grid, Typography } from "@mui/material";
import FAQAccordion from "../FAQ/Components/FAQAccordion";

// Sample data for each section
const sections = [
  {
    id: 1,
    title: "Tech Internship Opportunities",
    faqs: [
      {
        id: 1,
        question: "Freshman/Sophmore Internships",
        answer: "Details about this internship.",
      },
      {
        id: 2,
        question: "Software Engineering Internships",
        answer: "Details about this internship.",
      },
      {
        id: 3,
        question: "CUNY Internship to Employment (I2E) Internship",
        answer: "Details about this internship.",
      },
      {
        id: 4,
        question: "CUNY Internship Programs Portal",
        answer: "Details about this internship.",
      },
    ],
  },
  {
    id: 2,
    title: "Tech Fellowship/Apprenticeship Programs",
    faqs: [
      {
        id: 5,
        question: "CUNY Tech Prep",
        answer: "Details about this program.",
      },
      {
        id: 6,
        question: "Break Through Tech",
        answer: "Details about this program.",
      },
      {
        id: 7,
        question: "CUNY Apprenticeship Program",
        answer: "Details about this program.",
      },
      {
        id: 8,
        question: "Basta Fellowship",
        answer: "Details about this program.",
      },
    ],
  },
  {
    id: 3,
    title: "Tech Interview Preparation",
    faqs: [
      {
        id: 9,
        question: "CodePath - Technical Interview Prep Course",
        answer: "Details about this course.",
      },
      {
        id: 10,
        question: "Tech Interview Handbook",
        answer: "Details about this resource.",
      },
      {
        id: 11,
        question: "ByteByteGo - System Design Interview",
        answer: "Details about this resource.",
      },
      {
        id: 12,
        question: "LeetCode - Algorithm Practices",
        answer: "Details about this resource.",
      },
    ],
  },
  {
    id: 4,
    title: "Upcoming Networking Events",
    faqs: [
      {
        id: 13,
        question: "Google Developer Student Clubs",
        answer: "Details about this program.",
      },
      {
        id: 14,
        question: "GitHub Campus Expert Program",
        answer: "Details about this program.",
      },
      {
        id: 15,
        question: "Postman Student Leader Program",
        answer: "Details about this program.",
      },
      {
        id: 16,
        question: "Microsoft Learn Student Ambassadors",
        answer: "Details about this program.",
      },
    ],
  },
];

const Resources = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingY: "40px",
        background: "linear-gradient(to bottom, #eae0ff 0%, #FFFFFF 30%)", // Dark purple 70%, white 30%
        minHeight: "100vh", // Ensures the gradient covers the full viewport height
      }}
    >
      <Typography fontWeight="bold" align="center" variant="h3" mb="32px">
        Resources for Students
      </Typography>

      {sections.map((section) => (
        <Box key={section.id} sx={{ marginBottom: "40px" }}>
          {/* Section Header */}
          <Typography
            fontSize="28px"
            fontWeight="bold"
            mb="24px"
            textAlign="center"
          >
            {section.title}
          </Typography>

          <Grid
            container
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
            paddingX={{ sm: 2, lg: 20, xl: 24 }}
          >
            {section.faqs.map((faq) => (
              <Grid item key={faq.id} xs={12} md={5}>
                <FAQAccordion faq={faq} style={{ borderRadius: "20px" }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Resources;
