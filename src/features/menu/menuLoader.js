import { getMenu } from "../../services/apiRestaurant";

async function menuLoader() {
  const menuData = await getMenu();
  return menuData;
}

export default menuLoader;
