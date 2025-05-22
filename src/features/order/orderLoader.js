import { getOrder } from "../../services/apiRestaurant";

async function orderLoader({ params }) {
  const orderData = await getOrder(params.orderId);
  return orderData;
}

export default orderLoader;
