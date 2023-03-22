import { Inter } from "next/font/google";
import styles from "./Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="#">GO TO TOP</a>
    </div>
  );
};

export default Footer;
