import { Container, Grid, Typography } from "@mui/material";
import { products, highProtein } from "../products.jsx";

import ProductCard from "../components/ProductCard.jsx";

const ProductPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" mt={4} mb={2} fontWeight="bold">
        My Favorite Products
      </Typography>
      <Typography variant="h6" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        Everyday Supplements
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
      <Typography variant="h6" color="secondaryText" align="center" mt={4} mb={2} fontWeight="bold">
        High Protein Supplements
      </Typography>
      <Grid container spacing={4}>
        {highProtein.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
