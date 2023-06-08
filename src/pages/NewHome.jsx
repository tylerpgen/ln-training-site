import { useTheme } from "@emotion/react";
import { Typography, Button, Link, Box, Grow, Fade, useScrollTrigger, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import GymPic from "../assets/gympic.jpg";
import Portrait from "../assets/new-pics/newportrait.png";
import TrainingPic1 from "../assets/new-pics/trainingpic1.png";

const NewHome = () => {
  //Using useState to track if the page has faded in or not
  const [hasFadeIn, setHasFadeIn] = useState(false);
  const theme = useTheme();

  const StyledBox = styled(Box)({
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {},
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

  const TrainingPic = styled("img")(({ theme }) => ({
    alignItems: "center",
    width: "100%",
    padding: "15px",
    margin: "15px auto",
    borderRadius: "25px",
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      padding: "0",
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
    // Landing Page
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minWidth: "100%" }}>
        <BackgroundImage>
          <QuoteContainer>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontFamily="Open Sans"
              color="white"
              sx={{
                mb: "8px",

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
              fontFamily="Kanit"
              fontStyle="italic"
              color="white"
              sx={{
                padding: "0 5px",
                [theme.breakpoints.up("lg")]: {
                  fontSize: "2rem",
                },
              }}
            >
              Personal Training | Sports Performance | Online Coaching & Programming
            </Typography>
            <Box sx={{ mt: "10px", p: "15px" }}>
              <Link href="/contact" sx={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "1.4rem",
                    fontFamily: "Kanit",
                    fontWeight: "500",
                    height: "50px",
                    width: "fit-content",
                    backgroundColor: "#950101",

                    "&:hover": {
                      backgroundColor: "#950101",
                      transform: "scale(1.1)",
                      transition: "all 0.1s ease-in-out",
                    },
                    [theme.breakpoints.up("lg")]: {
                      fontSize: "2rem",
                      width: "250px",
                    },
                  }}
                >
                  Sign UP Now
                </Button>
              </Link>
            </Box>
          </QuoteContainer>
        </BackgroundImage>
      </Box>

      {/* Portrait Section with Name, Description, and Button call to action. */}

      <Box>
        <StyledBox>
          {/* Preventing from page always fading in on scroll */}
          {hasFadeIn ? (
            <>
              <PortraitPic src={Portrait} alt="lukas" className="portrait" />
              <Typography
                variant="h4"
                fontWeight="bold"
                fontSize="1.5rem"
                sx={{
                  alignItems: "center",
                  textAlign: "center",
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
                fontFamily="Kanit"
                fontWeight="500"
                fontStyle="italic"
                fontSize="1.1rem"
                sx={{
                  alignItems: "center",
                  textAlign: "center",
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
                  textAlign: "center",
                  padding: "10px",
                  margin: "0 12px",

                  [theme.breakpoints.up("lg")]: {
                    fontSize: "1.3rem",
                  },
                }}
              >
                "Health, performance, and longevity are not a matter of chance, it's a matter of choice"
              </Typography>
              <Link href="/contact" sx={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#950101",
                    width: "fit-content",
                    margin: "25px auto",
                    fontFamily: "Kanit",
                    fontSize: "1.1rem",
                    fontWeight: "500",

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
                  Limited Spots Apply Now !
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Fade in={trigger} timeout={1500} onEntered={handleFadeIn}>
                <PortraitPic src={Portrait} alt="lukas" />
              </Fade>
              <Grow in={trigger} timeout={900} onEntered={handleFadeIn}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="1.5rem"
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
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
                  fontFamily="Kanit"
                  fontWeight="500"
                  fontStyle="italic"
                  fontSize="1.1rem"
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
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
                    textAlign: "center",
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
                <Link href="/contact" sx={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#950101",
                      width: "fit-content",
                      margin: "25px auto",
                      fontFamily: "Kanit",
                      fontSize: "1.1rem",
                      fontWeight: "500",

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
                    Limited Spots Apply Now !
                  </Button>
                </Link>
              </Grow>
            </>
          )}
        </StyledBox>
      </Box>
      {/* About Me Section */}
      <Box>
        <StyledBox
          sx={{
            backgroundColor: "#2A2A2A",
          }}
        >
          <TrainingPic src={TrainingPic1} />
          <Box
            sx={{
              width: "100%",
              px: 1,
              mb: "25px",
              [theme.breakpoints.up("lg")]: {
                maxWidth: "700px",
              },
              [theme.breakpoints.only("xl")]: {
                maxWidth: "1050px",
              },
            }}
          >
            <Paper elevation={5} sx={{ p: 2, margin: "0 8px" }}>
              <Typography variant="h4" fontWeight="500" fontFamily="Kanit" sx={{ textAlign: "center" }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ mt: "8px", textIndent: "1.5em" }}>
                Hello! My name is Lukas Nouri, and my love for fitness and sports began at a young age. Throughout my
                years of competition, I have gained extensive knowledge and experience in Basketball, Baseball,
                Football, Soccer, Brazilian jiu-jitsu, Muay Thai, and Swimming. From the many tough years of training
                and competitive athletics, I also experienced injuries that required surgery and rehabilitation for both
                my lower back and hip. My passion for sports and experience with acute injuries, led me to learn more
                about fitness, and my passion for coaching made me want to share my knowledge with others.
              </Typography>
              <Typography variant="body1" sx={{ mt: "15px", textIndent: "1.5em" }}>
                I studied kinesiology at Cal State University, Northridge and graduated with my Bachelors in Exercise
                Science. Throughout my years of study I worked as an intern for many places with a wide variety of
                kinesiology practices. Some of these include: Athletic trainer for Football and Volleyball at Los
                Angeles Pierce College and Physical therapy at Northridge Hospital. I quickly developed the ability to
                train athletes, untrained individuals, and all populations of people returning from injury appropriately
                and effectively. After my studies, I earned my CSCS certification and decided to build and run my own
                private personal training business; LN Training.
              </Typography>
              <Typography variant="body1" sx={{ mt: "15px", textIndent: "1.5em" }}>
                Since I've started my independent practice I have experienced training a wide variety of clientele which
                includes everything from coaching my 8 year old niece in basketball fundamentals to post surgical
                rehabilitation with senior population, those making the transition from sedentary to active lifestyles,
                and even training Division-1 athletes. With my knowledge and combined experiences I have created a
                diverse foundation for coaching and helping others achieve their health, nutrition, sports performance
                and fitness goals.
              </Typography>
            </Paper>
          </Box>
        </StyledBox>
      </Box>
    </>
  );
};

export default NewHome;
