import './App.css';
import Navigation from './navigation/navigation';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './error/error-page';
import AboutUs from './about-us/about-us';
import Contact from './contact/contacts';
import Products from './products/products';


function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navigation/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/about-us",
          element:<AboutUs />
        },
        {
          path:"/products",
          element: <Products />
        },
        {
          path:"/contacts",
          element: <Contact />
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
