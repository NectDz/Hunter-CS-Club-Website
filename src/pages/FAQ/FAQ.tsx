import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FAQAccordion from "./Components/FAQAccordion";

const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //questions and answers list
  const faqs = [
    {
      id: "f1",
      question: "What does the Computer Science Club offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f2",
      question: "How can i get involved with the Computer Science Club?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f3",
      question:
        "Is this club for beginners? Can i still be a member if I am a non-Computer Science major?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f4",
      question: "Will this club help with classwork?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f5",
      question: "What upcoming Spring semester events should i know about?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f6",
      question:
        "Where is the Computer Science Club meeting room and what are their hours?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f7",
      question: "Will there be internship opportunities?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f8",
      question: "Will this club help with interview skills?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: "f9",
      question: "Will this club have guest speakers?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];
  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: isMobile ? "60px" : "0px" }}
    >
      <Grid item xs={12}>
        {/* Title */}
        <div
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            padding: "30px",
          }}
        >
          <Typography fontSize={30}>Frequently</Typography>
          <Typography pb={5} fontSize={30}>
            Asked{" "}
            <span
              style={{
                color: "#9859AC",
                fontWeight: "600",
              }}
            >
              Questions
            </span>
          </Typography>
          {/* Questions  */}
          <div>
            {faqs.map((faq, index) => {
              return (
                <FAQAccordion
                  faq={faq}
                  key={faq.id}
                  style={{
                    borderTopRightRadius: index === 0 ? "10px" : "0",
                    borderTopLeftRadius: index === 0 ? "10px" : "0",
                    borderBottomLeftRadius:
                      index === faqs.length - 1 ? "10px" : "0",
                    borderBottomRightRadius:
                      index === faqs.length - 1 ? "10px" : "0",
                  }}
                />
              );
            })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FAQ;
