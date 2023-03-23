import { Inter } from "next/font/google";
import styles from "./like.module.css";
import ContentTitle from "@/components/ContentTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1 }}
      >
        <ContentTitle title="MY LIKE PAGE." text="私の好きなもの紹介ページ" />
      </motion.div>
      <h1 className={styles.likeTitle}># MOVIE</h1>
      <div className={styles.movieYoutube}>
        <div className={styles.cardLink}>
          <div className={styles.linkText}>
            <h1>へレディタリー/継承</h1>
            <p>
              話題になった映画「ミッドサマー」と同じ監督。
              <br />
              平凡な家族の生活に嫌な雰囲気の異変が起きていくストーリー。
            </p>
            <iframe
              width="100%"
              height="230"
              src="https://www.youtube.com/embed/H0JhliQDc4U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={styles.cardLink}>
          <div className={styles.linkText}>
            <h1>きっと、うまくいく</h1>
            <p>
              インドで大ヒットしたコメディ映画。
              <br />
              インド名門の大学生三人がとにかくめちゃくちゃに荒らす学生友情ストーリー。
            </p>
            <iframe
              width="100%"
              height="230"
              src="https://www.youtube.com/embed/MAMv_s526vU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={styles.cardLink}>
          <div className={styles.linkText}>
            <h1>アメリカン・アニマルズ</h1>
            <p>
              おすすめしても誰も知らない映画。
              <br />
              大学生の四人が老人のコスプレして有名な絵画を盗むノンフィクションな映画。
            </p>
            <iframe
              width="100%"
              height="230"
              src="https://www.youtube.com/embed/IjXNQnlSVEo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
