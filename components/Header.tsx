import { Inter } from "next/font/google";
import styles from "./Header.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavlist}>
          <li className={styles.headerNavitem}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.headerNavitem}>
            <Link href="/skill">SKILL</Link>
          </li>
          <li className={styles.headerNavitem}>
            <Link href="/question">QUESTION</Link>
          </li>
          <li className={styles.headerNavitem}>
            <Link href="/like">LIKE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
