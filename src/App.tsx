import styles from "./App.module.scss";
import { ReactComponent as HighGlossIcon } from "./assets/icons/high-gloss.svg";
import { ReactComponent as MatteIcon } from "./assets/icons/matte.svg";
import { ReactComponent as SemiGlossIcon } from "./assets/icons/semi-gloss.svg";
import { Header, Products } from "./components";

const App = () => {
  const products = [
    {
      title: "matte",
      description:
        "a subtle but elegant finish for low-touch and delicate surfaces",
      icon: <MatteIcon />,
    },
    {
      title: "semi-gloss",
      description:
        "our signature finish for high-wear parts, details and surfaces",
      icon: <SemiGlossIcon />,
    },
    {
      title: "high-gloss",
      description:
        "an eye-stopping shine best for metal and other smooth surfaces",
      icon: <HighGlossIcon />,
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      <Products products={products} />
    </div>
  );
};

export default App;
