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
        question: "Summer 2025 Tech Internships ",
        answer: (
          <>
            <p></p>
            <a
              href="https://github.com/SimplifyJobs/Summer2025-Internships"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/SimplifyJobs/Summer2025-Internships
            </a>
          </>
        ),
      },
      {
        id: 2,
        question: "Lockheed Martin Software Engineer Internship",
        answer: (
          <>
            <p></p>
            <a
              href="https://www.lockheedmartinjobs.com/job/annapolis-junction/software-developer-cyber-intern/694/69572556224"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.lockheedmartinjobs.com/job/annapolis-junction/software-developer-cyber-intern/694/69572556224
            </a>
          </>
        ),
      },
      {
        id: 3,
        question: "Slack Software Engineer Internship",
        answer: (
          <>
            <p></p>
            <a
              href="https://salesforce.wd12.myworkdayjobs.com/Slack/job/California---San-Francisco/Summer-2025-Intern---Software-Engineer_JR262842-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://salesforce.wd12.myworkdayjobs.com/Slack/job/California---San-Francisco/Summer-2025-Intern---Software-Engineer_JR262842-3
            </a>
          </>
        ),
      },
      {
        id: 4,
        question: "ServiceNow Software Engineer Internship",
        answer: (
          <>
            <p></p>
            <a
              href="https://jobs.smartrecruiters.com/ServiceNow/744000011666405"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://jobs.smartrecruiters.com/ServiceNow/744000011666405
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Programming Resources",
    faqs: [
      {
        id: 5,
        question: "Coding Tutorials",
        answer: (
          <>
            <p>A hub of coding tutorials!</p>
            <a
              href="https://ourcodingclub.github.io/tutorials.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ourcodingclub.github.io/tutorials.html
            </a>
          </>
        ),
      },
      {
        id: 6,
        question: "IOS Developer",
        answer: (
          <>
            <p>Learn to develop IOS apps</p>
            <a
              href="https://developer.apple.com/swift/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.apple.com/swift/
            </a>
          </>
        ),
      },
      {
        id: 7,
        question: "HTML Tutorials",
        answer: (
          <>
            <p>Learn how to program in HTML with these Tutortials!</p>
            <a
              href="https://www.tutorialrepublic.com/html-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.tutorialrepublic.com/html-tutorial/
            </a>
          </>
        ),
      },
      {
        id: 8,
        question: "Android Development",
        answer: (
          <>
            <p>Learn how to develop Android apps with these tutorials and</p>
            <a
              href="https://developer.android.com/courses/android-basics-compose/course#1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developer.android.com/courses/android-basics-compose/course#1
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
        answer: (
          <>
            <p>
              The courses are designed to prepare students to solve challenging
              algorithmic problems commonly used in interviews for top
              companies.
            </p>
            <a
              href="https://www.codepath.org/courses/tech-interview-prep"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.codepath.org/courses/tech-interview-prep
            </a>
          </>
        ),
      },
      {
        id: 10,
        question: "Tech Interview Handbook",
        answer: (
          <>
            <p></p>
            <a
              href="https://www.techinterviewhandbook.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.techinterviewhandbook.org/
            </a>
          </>
        ),
      },
      {
        id: 11,
        question: "Neetcode",
        answer: (
          <>
            <p>
              Tutorials and path to get started with LeetCode Questions for
              Interviews!
            </p>
            <a
              href="https://neetcode.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://neetcode.io/
            </a>
          </>
        ),
      },
      {
        id: 12,
        question: "LeetCode",
        answer: (
          <>
            <p></p>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://leetcode.com/
            </a>
          </>
        ),
      },
    ],
  },
];

const Resources = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingY: "80px",
        minHeight: "100vh",
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
