import { Container, Grid, Typography, Link } from "@mui/material";
import { gymBag } from "../products.jsx";

import ProductCard from "../components/ProductCard.jsx";

const ProductPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" mt={4} mb={2} fontWeight="bold">
        More of My Favorite Products
      </Typography>
      <Typography variant="h5" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        Gym Bag Necessities
      </Typography>
      <Grid container spacing={4}>
        {gymBag.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
      <Container sx={{ justifyContent: "center", textAlign: "center", margin: "10px 0" }}>
        <Link href="/products" sx={{ color: "black", textDecoration: "none", "&:hover": { color: "black" } }}>
          Prev Page
        </Link>
      </Container>
    </Container>
  );
};

export default ProductPage;
