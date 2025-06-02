import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import MenuItem from "./features/menu/MenuItem";
import Cart from "./features/cart/Cart";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";
import Order, { orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { updateOrderAction } from "./features/order/UpdateOrder";
import { updateOrder } from "./services/apiRestaurant";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
        children: [
          {
            path: "item",
            element: <MenuItem />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
