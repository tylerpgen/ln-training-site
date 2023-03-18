import { useTheme } from "@emotion/react";
import { Typography, Button, Container, Link } from "@mui/material";
import { styled } from "@mui/system";
import GymPic from "../assets/new-pics/gympic.png";

const NewHome = () => {
  const theme = useTheme();
  const BackgroundImage = styled("div")({
    backgroundImage: `url(${GymPic})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    position: "relative",
  });

  const QuoteContainer = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: "35%",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "10%",
    },
  }));

  return (
    <div sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", minWidth: "100%" }}>
      <BackgroundImage>
        <QuoteContainer>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{
              mb: "10px",
              [theme.breakpoints.up("lg")]: {
                fontSize: "5rem",
              },
            }}
          >
            LN TRAINING
          </Typography>
          <Typography
            variant="h6"
            fontWeight="light"
            color="white"
            sx={{
              [theme.breakpoints.up("lg")]: {
                fontSize: "2rem",
              },
            }}
          >
            Your Fitness Your Way Your Time
          </Typography>
          <Container sx={{ mt: "10px" }}>
            <Link href="/contact" sx={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.1rem",
                  height: "50px",
                  width: "150px",
                  backgroundColor: "#950101",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#950101",
                    transform: "scale(1.1)",
                    transition: "all 0.1s ease-in-out",
                  },
                }}
              >
                Sign UP Now
              </Button>
            </Link>
          </Container>
        </QuoteContainer>
      </BackgroundImage>
    </div>
  );
};

export default NewHome;
