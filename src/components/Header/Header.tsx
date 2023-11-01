import { ReactComponent as DiamondIcon } from "../../icons/diamond.svg";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.container}>
      <span className={styles["header-item"]}>PRODUCTS</span>
      <span className={styles["header-item"]}>DISCOUNTS</span>
      <DiamondIcon />
      <span className={styles["header-item"]}>OUR PARTNERS</span>
      <span className={styles["header-item"]}>ABOUT US</span>
    </div>
  );
};
