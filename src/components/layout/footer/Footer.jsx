import { Outlet } from "react-router-dom";
import "./../navbar/Navbar.css";

const Footer = () => {
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "pink", height: "10vh" }}
        className="footer"
      >
        <h5 style={{ color: "black" }}>
          <span className="flash-text">
            Todos los productos y derechos reservados @2023
          </span>
        </h5>
        <a href="https://www.instagram.com/hemisferiodarwin/" target="_blank">
          <img
            src="https://res.cloudinary.com/dgkaz6flz/image/upload/v1699643568/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM_jpzcqg.png"
            alt=""
            className="ig"
          />
        </a>
        <a href="https://www.tiktok.com/@hemisferiodarwin" target="_blank">
          <img
            src="https://res.cloudinary.com/dgkaz6flz/image/upload/v1699643744/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA_w240-h480-rw_gkzdvi.webp"
            alt=""
            className="ig"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
