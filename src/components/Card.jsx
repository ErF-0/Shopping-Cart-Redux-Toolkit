import { useEffect } from "react";
import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";
import { productQuantity, shortenText } from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../features/cart/cartSlice";
import { setLocalStorageData } from "../features/localStorage/localStorageSlice";
const Card = ({ data }) => {
  const { id, image, title, price } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(state, id);
  useEffect(() => {
    dispatch(setLocalStorageData(state));
  }, [state]);

  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decreaseItem(data))}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity ? (
            <button onClick={() => dispatch(increaseItem(data))}>+</button>
          ) : (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
