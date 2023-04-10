import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>PORTFOLIO</h1>
            {/* <p>INAGAKI.</p> */}
          </div>
          <div className={styles.heroImage}>
            <img src="../Images/iro.jpg" alt="" />
          </div>
        </div>

        {/* introduction-sec */}

        <div className={styles.selfIntroduction}>
          <div className={styles.selfIcon}>
            <img src="../Images/jibun.jpg" alt="" />
          </div>
          <div className={styles.introductionText}>
            <h1>INAGAKI TSUBASA</h1>
            <h5>
              2020.05 Word Pressに触れる。
              <br />
              2022.04 大学の講義でプログラミングに触れる。
              <br />
              2022.08 講義が終わり、独学でプログラミングを学ぶ。
            </h5>
            <div className={styles.icon}>
              <a
                href="https://github.com/Inagaki-Tsubasa"
                className={styles.githubIcon}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/gakkie_ab/"
                className={styles.instaIcon}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com/machino_end"
                className={styles.twitterIcon}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.appContainer}>
          <h1>NEW APP!!</h1>
          <div className={styles.cardContent}>
            <div className={styles.card}>
              <a href="https://next-website-taupe.vercel.app/">
                <img src="../Images/renew.png" alt="" />
                <div className={styles.cardBody}>
                  <h2>リニューアルWEBサイト</h2>
                  <p>使用した言語</p>
                  <h5>Next.js, Typescript</h5>
                </div>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://inagaki-tsubasa.github.io/kinggnu-gallery/">
                <img src="../Images/kinggnu.png" alt="" />
                <div className={styles.cardBody}>
                  <h2>KingGnuの紹介ページ</h2>
                  <p>使用した言語</p>
                  <h5>React, Three.js (fiber, drei)</h5>
                </div>
              </a>
            </div>

            <div className={styles.card}>
              <a href="https://inagaki-tsubasa.github.io/university-website/">
                <img src="../Images/majan.png" alt="" />
                <div className={styles.cardBody}>
                  <h2>大学に掲載されたページ</h2>
                  <p>使用した環境</p>
                  <h5>Typescript, Material UI</h5>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.study}>
          <h1>現在勉強しているスキル</h1>
          <div className={styles.studyContainer}>
            <img src="../Images/three.png" alt="" />
            <img src="../Images/nextjs.png" alt="" />
            <img src="../Images/ts.png" alt="" />
            <img src="../Images/react.png" alt="" />
            <img src="../Images/firebase.png" alt="" />
          </div>
          <h1>これから勉強したいスキル</h1>
          <div className={styles.studyContainer}>
            <img src="../Images/vue.png" alt="" />

            <img src="../Images/gpt.png" alt="" />
            <img src="../Images/svelte.png" alt="" />
          </div>
        </div>

        <Footer />
      </motion.div>
    </div>
  );
}
