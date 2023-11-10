import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Estas seguro que quiere vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si!",
      denyButtonText: `No, me quiero llevar todo😎!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciadp😥!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito esta igual de lleno que antes", "", "warning");
      }
    });
  };

  return (
    <div className="main-fin">
      <h1>Carrito</h1>

      {cart.map((product) => (
        <div
          key={product.id}
          style={{ border: "4px solid black" }}
          className="paso-final"
        >
          <h2 className="p-title">{product.title}</h2>
          <h3>Cantidad: {product.quantity}</h3>
          <h3 className="p-price">Valor: {product.price}$</h3>
          <IconButton onClick={() => deleteProductById(product.id)}>
            <DeleteForeverIcon color="primary" className="basura" />
          </IconButton>
        </div>
      ))}

      <div>
        <h5 className="flecha">⬇</h5>
      </div>

      {cart.length > 0 && (
        <div className="fin-compra">
          <h2 className="total">Total: {total}$</h2>

          <Link to="/checkout">
            <Button variant="contained">Finalizar compra</Button>
          </Link>

          <Button variant="contained" onClick={clearCartWithAlert}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
