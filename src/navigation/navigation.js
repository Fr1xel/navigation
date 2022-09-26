import { Link, Outlet } from "react-router-dom";
import "./navigation.css"

const Navigation = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Company Name
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link class="nav-link" to={"/about-us"}>
                About Us
              </Link>
              <Link class="nav-link" to={"/products"}>
                Products
              </Link>
              <Link class="nav-link" to={"/contacts"}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
