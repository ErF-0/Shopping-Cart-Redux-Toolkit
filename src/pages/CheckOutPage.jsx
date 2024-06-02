import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocalStorageData } from "../features/localStorage/localStorageSlice";
//components
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import EmptyCart from "../components/EmptyCart";

import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocalStorageData(state));
  }, [state]);

  if (!state.itemsCounter) return <EmptyCart />;

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} dispatch={dispatch} />

      <section className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} dispatch={dispatch} />
        ))}
      </section>
    </div>
  );
};

export default CheckOutPage;
