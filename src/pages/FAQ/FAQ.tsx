import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FAQAccordion from "./Components/FAQAccordion";
import { faqs } from "./consts/faqs";

const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: isMobile ? "0px" : "150px" }}
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
          {/* Questions */}
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
