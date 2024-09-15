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
        question: "Microsoft New Techs Program (Freshman/Sophmore)",
        answer: (
          <>
            <p>
              7-week hands-on training program. Mentorship from Microsoft senior
              staff.
            </p>
            <a
              href="https://newtechnologists.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://newtechnologists.com/
            </a>
          </>
        ),
      },
      {
        id: 6,
        question: "IBM Accelerate (Sophomore)",
        answer: (
          <>
            <p>
              8-week summer virtual learning experience in tracks such as
              Software, Hardware, Design, etc.
            </p>
            <a
              href="https://careers.ibm.com/campaign/accelerate-application-form/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://careers.ibm.com/campaign/accelerate-application-form/
            </a>
          </>
        ),
      },
      {
        id: 7,
        question: "Jane Street Immersion Program (Freshman)",
        answer: (
          <>
            <p>
              Software engineering fellowship at Jane Street NYC. Scholarship
              available.
            </p>
            <a
              href="https://www.janestreet.com/join-jane-street/programs-and-events/jsip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.janestreet.com/join-jane-street/programs-and-events/jsip/
            </a>
          </>
        ),
      },
      {
        id: 8,
        question: "Year Up (All Students)",
        answer: (
          <>
            <p>
              Free hybrid training program. Get matched to an internship after
              training
            </p>
            <a
              href="https://www.yearup.org/students"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.yearup.org/students
            </a>
          </>
        ),
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
      <Typography fontWeight="bold" align="center" variant="h5" mb="32px">
        Checkout the resources hand picked by the Hunter CS Club to help you in
        your Computer Science Journey!
      </Typography>

      {sections.map((section) => (
        <Box key={section.id} sx={{ marginBottom: "40px" }}>
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
