import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  ErrorPage,
  Blogs,
  Portfolio,
  Contact,
  PostPage,
  NewPost,
} from "./pages";
import Layout from "./Layout";
import { EditPost } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs/:id",
        element: <PostPage />,
      },
      {
        path: "blogs/newpost",
        element: <NewPost />,
      },
      {
        path: "blogs/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
