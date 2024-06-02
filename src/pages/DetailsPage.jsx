import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
//icons
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
//componenets
import Loader from "../components/Loader";

//styles
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(state=>
    state.product.products.find((item) => item.id === +id)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (!productDetails) return <Loader />;
  const { image, title, description, price, category } = productDetails;
  return (
    <section className={styles.container}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />${price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
