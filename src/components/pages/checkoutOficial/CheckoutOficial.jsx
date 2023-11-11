import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./checkout.css";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    repetPassword: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      {orderId ? (
        <div className="confirmation">
          <h2 className="heading">¡Gracias por su compra!</h2>
          <p className="subheading">Su N° de comprobante es {orderId}</p>
          <Link to="/" className="link">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Enviar
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
