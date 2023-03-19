import { useTheme } from "@emotion/react";
import { Typography, Button, Container, Link, Box, Grow, Fade, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import GymPic from "../assets/new-pics/gympic.png";
import Portrait from "../assets/new-pics/newportrait.png";

const NewHome = () => {
  const [hasFadeIn, setHasFadeIn] = useState(false);
  const theme = useTheme();

  const StyledBox = styled(Box)({
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
      alignItems: "center",
    },
    minHeight: "100vh",
    minWidth: "100%",
  });

  const BackgroundImage = styled("div")({
    backgroundImage: `url(${GymPic})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
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

  const PortraitPic = styled("img")(({ theme }) => ({
    alignItems: "center",
    width: "60%",
    margin: "15px auto",
    borderRadius: "80%",
    [theme.breakpoints.up("lg")]: {
      width: "25%",
    },
  }));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0.5,
  });

  const handleFadeIn = () => {
    if (!hasFadeIn && trigger) {
      setHasFadeIn(true);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minWidth: "100%" }}>
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
      </Box>
      <Box>
        <StyledBox>
          {hasFadeIn ? (
            <>
              <PortraitPic src={Portrait} alt="lukas" className="portrait" />
              <Typography
                variant="h4"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{
                  alignItems: "center",
                  margin: "8px auto",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "2rem",
                  },
                }}
              >
                Lukas Nouri
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                fontStyle="italic"
                fontSize="1.1rem"
                sx={{
                  alignItems: "center",
                  margin: "0 auto",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.5rem",
                  },
                }}
              >
                Certified Strength and Conditioning Specialist
              </Typography>
              <Typography
                variant="h6"
                fontSize="1.1rem"
                sx={{
                  alignItems: "center",
                  padding: "10px",
                  margin: "0 12px",
                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.3rem",
                  },
                }}
              >
                "Health, performance, and longevity are not a matter of chance, it's a matter of choice"
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#950101",
                  width: "fit-content",
                  margin: "25px auto",
                  "&:hover": {
                    backgroundColor: "#950101",
                    transform: "scale(1.1)",
                    transition: "all 0.1s ease-in-out",
                  },
                  [theme.breakpoints.up("lg")]: {
                    mb: "50px",
                    fontSize: "1.2rem",
                  },
                }}
              >
                Schedule a Consultation NOW
              </Button>
            </>
          ) : (
            <>
              <Fade in={trigger} timeout={1500} onEntered={handleFadeIn}>
                <PortraitPic src={Portrait} alt="lukas" className="portrait" />
              </Fade>
              <Grow in={trigger} timeout={900} onEntered={handleFadeIn}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="1.5rem"
                  sx={{
                    alignItems: "center",
                    margin: "8px auto",
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "2rem",
                    },
                  }}
                >
                  Lukas Nouri
                </Typography>
              </Grow>
              <Grow in={trigger} timeout={900} onEntered={handleFadeIn}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  fontStyle="italic"
                  fontSize="1.1rem"
                  sx={{
                    alignItems: "center",
                    margin: "0 auto",
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  Certified Strength and Conditioning Specialist
                </Typography>
              </Grow>
              <Grow in={trigger} timeout={900} onEntered={handleFadeIn}>
                <Typography
                  variant="h6"
                  fontSize="1.1rem"
                  sx={{
                    alignItems: "center",
                    padding: "10px",
                    margin: "0 12px",
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "1.3rem",
                    },
                  }}
                >
                  "Health, performance, and longevity are not a matter of chance, it's a matter of choice"
                </Typography>
              </Grow>
              <Grow in={trigger} timeout={900} onEntered={handleFadeIn}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#950101",
                    width: "fit-content",
                    margin: "25px auto",
                    "&:hover": {
                      backgroundColor: "#950101",
                      transform: "scale(1.1)",
                      transition: "all 0.1s ease-in-out",
                    },
                    [theme.breakpoints.up("lg")]: {
                      mb: "50px",
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  Schedule a Consultation NOW
                </Button>
              </Grow>
            </>
          )}
        </StyledBox>
      </Box>
    </>
  );
};

export default NewHome;
