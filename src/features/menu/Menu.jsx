import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menuData = useLoaderData();

  return (
    <div>
      <ul>
        {menuData.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
