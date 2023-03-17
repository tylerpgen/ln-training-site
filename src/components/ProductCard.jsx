import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ width: "100%" }}>
      <Card>
        <CardActionArea component="a" href={product.link} target="_blank">
          <CardMedia component="img" height="250" image={product.image} alt={product.name} />
          <CardContent>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
