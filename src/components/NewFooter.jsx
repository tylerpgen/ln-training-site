import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { FaInstagram, FaYelp, FaGoogle } from "react-icons/fa";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ mt: "auto", backgroundColor: "black" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton href="https://www.instagram.com/ln.training/" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="white" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.yelp.com/biz/ln-training-woodland-hills-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYelp color="white" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.google.com/search?q=ln+training&rlz=1C1CHBF_enUS966US966&oq=ln+training&aqs=chrome..69i57j0i512j0i22i30l3j69i60j69i61l2.1430j0j7&sourceid=chrome&ie=UTF-8#lrd=0x80c2990526fcbf43:0x4a52cfe6fbbd0750,1,,,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle color="white" />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" color="white" sx={{ fontSize: "11px" }}>
          TG Copyright© {currentyear}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
