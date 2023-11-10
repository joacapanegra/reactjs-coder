import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "pink", height: "10vh" }}>
        <h5 style={{ color: "black" }}>
          Todos los productos y derechos reservados @2023
        </h5>
      </div>
    </>
  );
};

export default Footer;
