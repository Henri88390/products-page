import { ReactComponent as DiamondIcon } from "../../assets/icons/diamond.svg";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles["header-item"]}>PRODUCTS</div>
      <div className={styles["header-item"]}>DISCOUNTS</div>
      <DiamondIcon />
      <div className={styles["header-item"]}>OUR PARTNERS</div>
      <div className={styles["header-item"]}>ABOUT US</div>
    </div>
  );
};
