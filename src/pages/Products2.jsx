import { Container, Grid, Typography, Link, Box } from "@mui/material";
import { gymBag } from "../assets/data/products";

import ProductCard from "../components/ProductCard.jsx";

const ProductPage = () => {
  return (
    <Box sx={{ backgroundColor: "#2A2A2A", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" pt={2} fontWeight="bold" fontFamily="Roboto" sx={{ color: "white" }}>
          More of My Favorite Products
        </Typography>
        <Typography
          variant="h6"
          fontSize="1.4rem"
          color="white"
          align="center"
          mt="8px"
          fontFamily="Kanit"
          fontWeight="300"
          fontStyle="italic"
        >
          More links to some of my favorite fitness and nutrition items!
        </Typography>

        {/* Gym Bag Category */}
        <Typography
          variant="h5"
          fontSize="1.7rem"
          color="white"
          align="center"
          fontFamily="Kanit"
          mt={2}
          mb={2}
          fontWeight="300"
        >
          Gym Bag Necessities
        </Typography>
        <Grid container spacing={4}>
          {gymBag.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>
        <Container sx={{ justifyContent: "center", textAlign: "center", padding: "25px 0" }}>
          <Link
            href="/products"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Roboto",
              fontWeight: "600",
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Prev Page
          </Link>
        </Container>
      </Container>
    </Box>
  );
};

export default ProductPage;
