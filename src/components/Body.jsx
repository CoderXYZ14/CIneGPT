import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Login, Browse } from ".";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
