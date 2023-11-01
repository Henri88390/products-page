import { v4 as uuid } from "uuid";
import { Product } from "../";
import { ProductModel } from "../../models";
import styles from "./Products.module.scss";
type ProductsProps = {
  products: ProductModel[];
};
export const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["info-container"]}>
        <span className={styles.header}>
          <span className={styles["header-title"]}>products</span>
          <span className={styles["header-subtitle"]}>
            affordable quality, every time.
          </span>
        </span>
        <div className={styles["products-container"]}>
          {products.map(({ title, description, icon }) => (
            <Product
              key={uuid()}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
