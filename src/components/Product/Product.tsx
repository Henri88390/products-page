import { ReactNode } from "react";
import { ReactComponent as Separator } from "../../assets/icons/separator.svg";
import styles from "./Product.module.scss";
type ProductProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
export const Product = ({ title, description, icon }: ProductProps) => {
  return (
    <div className={styles["product-container"]}>
      {icon}
      <span className={styles["product-title"]}>{title}</span>
      <Separator />
      <span className={styles["product-description"]}>{description}</span>
      <span className={styles["explore-btn"]}>explore</span>
    </div>
  );
};
