import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 300 }} className="cuadrado">
      <CardMedia
        sx={{ height: 300 }}
        image={item.img}
        title={`image ${item.title}`}
        className="img-pro"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="nombre-product"
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          className="descri"
          fontSize={"18px"}
          marginBottom={"10px"}
        >
          {item.description}
        </Typography>
        <Typography variant="body1" className="precio">
          {item.price}$.
        </Typography>
      </CardContent>
      <CardActions className="cudra-masinfo">
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="outlined" class>
            Ir a detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
