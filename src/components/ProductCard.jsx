import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Grid item sm={12} md={6} lg={4} key={product.id}>
      <Card>
        <CardActionArea component="a" href={product.link} target="_blank">
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ minHeight: "300px", maxHeight: "275px", objectFit: "contain", mt: "10px" }}
          />
          <CardContent
            component="p"
            sx={{
              minHeight: "150px",
              maxHeight: "150px",
            }}
          >
            <Typography variant="h5" gutterBottom fontFamily="Kanit" fontWeight="500" textAlign="center">
              {product.name}
            </Typography>
            <Typography variant="body2" color="black" fontSize="1rem" textAlign="center">
              {product.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "right", p: "5px" }}>
            <ShoppingCartIcon />
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
