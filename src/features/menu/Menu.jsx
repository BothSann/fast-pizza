import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menuData = useLoaderData();

  return (
    <div>
      <ul className="divide-y divide-stone-200 px-2">
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
