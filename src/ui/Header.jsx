import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza CO.</Link>
      <p>Both Sann</p>
      <SearchOrder />
    </header>
  );
}

export default Header;
