import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menuData = useLoaderData();
  console.log(menuData);

  return (
    <div>
      <h1>{menuData[0].name}</h1>
    </div>
  );
}

export async function loader() {
  const menuData = await getMenu();
  return menuData;
}
export default Menu;
