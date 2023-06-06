import { Container, Grid, Typography, Link, Box } from "@mui/material";
import { products, highProtein, preWorkout } from "../assets/data/products";
import ProductCard from "../components/ProductCard.jsx";

function ProductPage() {
  return (
    <Box sx={{ backgroundColor: "#2A2A2A", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" pt={2} fontWeight="bold" fontFamily="Roboto" sx={{ color: "white" }}>
          My Favorite Products
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
          Links to some of my favorite fitness and nutrition items!
        </Typography>
        {/* Products seperated into different categories in order to have the ability to organize them to client's request */}

        {/* High Protein Category */}
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
          High Protein Supplements
        </Typography>
        <Grid container spacing={4}>
          {highProtein.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>

        {/* DIY Category */}
        <Typography
          variant="h5"
          fontSize="1.5rem"
          color="white"
          align="center"
          fontFamily="Kanit"
          mt={4}
          mb={2}
          fontWeight="300"
        >
          DIY Pre Workout for 100+ servings
        </Typography>
        <Grid container spacing={4}>
          {preWorkout.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>

        {/* Everyday Category */}
        <Typography
          variant="h5"
          fontSize="1.7rem"
          color="white"
          align="center"
          fontFamily="Kanit"
          mt={4}
          mb={2}
          fontWeight="300"
        >
          Everyday Supplements
        </Typography>
        {/* Product map for data file */}
        <Grid container spacing={4}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>
        <Container sx={{ justifyContent: "center", textAlign: "center", padding: "25px 0" }}>
          <Link
            href="/products/2"
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Roboto",
              fontWeight: "600",
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "white" },
            }}
          >
            Next Page
          </Link>
        </Container>
      </Container>
    </Box>
  );
}

export default ProductPage;
