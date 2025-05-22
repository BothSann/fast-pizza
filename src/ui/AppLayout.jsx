import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading);

  return (
    <div className="layout">
      {isLoading && <Spinner />}

      <Header />
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
