import { Typography, Box, Paper, Grow, Fade } from "@mui/material";
import { useTheme } from "@emotion/react";
import { clientData } from "../assets/data/clients";
import { styled } from "@mui/system";

const TestimonialPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "25px",
  margin: "0 auto",
  [theme.breakpoints.up("lg")]: {
    width: "980px",
    margin: "0 auto",
    padding: "25px 0",
  },
}));

const TestimonialImage = styled("img")(({ theme }) => ({
  minWidth: "50%",
  maxWidth: "50%",
  maxHeight: "225px",
  minHeight: "225px",
  margin: "0 8px",
  borderRadius: "10px",
  filter: "drop-shadow(0px 0px 2px #000)",
  [theme.breakpoints.up("lg")]: {
    filter: "drop-shadow(0px 0px 3px #000)",
    maxWidth: "100px",
    maxHeight: "350px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    height: "100%",
    width: "50%",
  },
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontFamily: "Roboto",
  padding: "0 10px",
  margin: "10px auto",
  [theme.breakpoints.up("lg")]: {
    height: "100%",
    width: "60%",
    fontSize: "1.2rem",
  },
}));

const NewTestimonial = () => {
  const theme = useTheme();

  return (
    <Box sx={{ m: "0 auto", minHeight: "100vh", backgroundColor: "#2A2A2A" }}>
      <Fade in={true} timeout={1000}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          fontFamily="Roboto"
          sx={{ color: "white", pt: "10px" }}
        >
          Testimonials
        </Typography>
      </Fade>
      <Fade in={true} timeout={1000}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="light"
          fontFamily="Kanit"
          fontStyle="italic"
          sx={{
            fontSize: "1.3rem",
            color: "white",
            mt: "0",
            p: "0 3px",
            [theme.breakpoints.up("lg")]: {
              fontSize: "1.6rem",
            },
          }}
        >
          My amazing clients and their stories!
        </Typography>
      </Fade>

      {clientData.map((testimonial, i) => (
        <Grow in={true} timeout={800}>
          <Box key={i} sx={{ m: "0 auto", p: "10px", mb: "15px" }}>
            <TestimonialPaper elevation={5}>
              <Typography
                variant="h4"
                fontWeight="500"
                fontFamily="Kanit"
                align="center"
                mb="20px"
                sx={{
                  [theme.breakpoints.up("lg")]: {
                    mb: "20px",
                  },
                }}
              >
                {testimonial.name}
              </Typography>
              <ImageContainer>
                <TestimonialImage src={testimonial.beforePic} alt="Before" />
                <TestimonialImage src={testimonial.afterPic} alt="After" />
              </ImageContainer>
              <ReviewText variant="body1" align="center">
                {testimonial.review}
              </ReviewText>
              <Typography variant="body2" fontSize="12px" fontStyle="italic">
                -via Google Review
              </Typography>
            </TestimonialPaper>
          </Box>
        </Grow>
      ))}
    </Box>
  );
};

export default NewTestimonial;