import { MdDeleteOutline } from "react-icons/md";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../features/cart/cartSlice";
import { productTotalPrice, shortenText } from "../helpers/helper";
import styles from "./BasketCard.module.css";

const BasketCard = ({ data, dispatch }) => {
  const { title, image, quantity, price } = data;
  return (
    <article className={styles.basketCard}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        <p>${productTotalPrice(quantity, price)}</p>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decreaseItem(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseItem(data))}>+</button>
      </div>
    </article>
  );
};

export default BasketCard;
