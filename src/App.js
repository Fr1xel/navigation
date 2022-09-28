import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./home/home";
import ErrorPage from "./error/error-page";
import AboutUs from "./about-us/about-us";
import Contact from "./contact/contacts";
import Products from "./products/products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement : <ErrorPage />
    },
    {
      path: "/about-us",
      element: <AboutUs />,
      errorElement : <ErrorPage />
    },
    {
      path: "/products",
      element: <Products />,
      errorElement : <ErrorPage />
    },
    {
      path: "/contacts",
      element: <Contact />,
      errorElement : <ErrorPage />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
