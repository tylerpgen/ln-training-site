import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Grid item sm={12} md={6} lg={4} key={product.id}>
      <Card>
        <CardActionArea component="a" href={product.link} target="_blank">
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ minHeight: "300px", maxHeight: "300px", objectFit: "contain" }}
          />
          <CardContent component="p" sx={{ minHeight: "150px", maxHeight: "150px" }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {product.name}
            </Typography>
            <Typography variant="body2" color="black">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
