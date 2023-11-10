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
    <Card sx={{ width: 300, height: "90vh" }} className="cuadrado">
      <CardMedia
        sx={{ height: 200 }}
        image={item.img}
        title={`image ${item.title}`}
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
        <Typography variant="h6" color="text.secondary" className="descri">
          {item.description}
        </Typography>
        <Typography variant="body1" className="precio">
          {item.price}$.
        </Typography>
      </CardContent>
      <CardActions className="cudra-masinfo">
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="outlined" class>
            Añadir al carro
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
