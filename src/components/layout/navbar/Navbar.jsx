import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={"containerNavbar"}>
        <Link to="/">
          <h4>Hemisfeiro Darwin</h4>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/category/stickers">
            <li>Stickers</li>
          </Link>
          <Link to="/category/camisetas">
            <li>Camisetas</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
