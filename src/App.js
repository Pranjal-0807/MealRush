import "./App.css";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import About from "./components/About";

import RestaurantDishes from "./components/RestaurantDishes";
// import Grocery from './components/Grocery';
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import RestaurantContainer from "./components/RestaurantContainer";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurantmenu/:resId",
        element: <RestaurantDishes />,
      },
    ],
  },
]);

export default App;
