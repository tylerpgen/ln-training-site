import { Container, Grid, Typography, Link } from "@mui/material";
import { products, highProtein, preWorkout } from "../assets/data/products";
import ProductCard from "../components/ProductCard.jsx";

function ProductPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" mt={4} mb={2} fontWeight="bold">
        My Favorite Products
      </Typography>
      <Typography variant="h5" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        High Protein Supplements
      </Typography>
      <Grid container spacing={4}>
        {highProtein.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
      <Typography variant="h5" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        DIY Pre Workout for 100+ servings
      </Typography>
      <Grid container spacing={4}>
        {preWorkout.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
      <Typography variant="h5" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        Everyday Supplements
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
      <Container sx={{ justifyContent: "center", textAlign: "center", margin: "10px 0" }}>
        <Link href="/products/2" sx={{ color: "black", textDecoration: "none", "&:hover": { color: "black" } }}>
          Next Page
        </Link>
      </Container>
    </Container>
  );
}

export default ProductPage;
