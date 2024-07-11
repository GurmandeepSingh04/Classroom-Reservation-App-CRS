import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./Body";
import DeptList from "./constants/DeptList.jsx";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import About from "./About.jsx";

function App() {
  const user = useContext(UserContext);

  const components = [];

  DeptList.map((dept) =>
    components.push({
      path: dept.link,
      element: <dept.component />,
    })
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Profile",
      element: <Profile />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/About",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    ...components,
  ]);
  return (
    <>
      {user?.loggedIn === null ? (
        ""
      ) : user?.loggedIn === true ? (
        <div>
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
