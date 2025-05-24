import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

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

export async function menuLoader() {
  const menuData = await getMenu();
  return menuData;
}

export default Menu;
