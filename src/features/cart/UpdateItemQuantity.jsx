import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
