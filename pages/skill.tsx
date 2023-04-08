import { Inter } from "next/font/google";
import styles from "./skill.module.css";
import Card from "@/components/Card";
import ContentTitle from "@/components/ContentTitle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ts from "../public/Images/ts.png";

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
        <ContentTitle title="MY SKILLS PAGE." text="私の学習まとめページ" />
      </motion.div>
      <div className={styles.skills}>
        <div className={styles.skillsContent}>
          <Card
            image="../Images/gallery.png"
            text="chatGPTで映画のギャラリーを作った"
            skill="Next.js, chatGPT"
            link="https://gpt-gallery.vercel.app/"
          />
          <Card
            image="../Images/newapp.png"
            text="Next.jsで自己紹介サイトをリニューアルした！！"
            skill="Next.js, Typescript"
            link="https://next-website-3gdzb1brg-inagaki-tsubasa.vercel.app/"
          />
          <Card
            image="../Images/line.png"
            text="練習としてLINEのクローンを作った（リンク無）"
            skill="firebase, React"
            link="#"
          />
          <Card
            image="../Images/portfolio.png"
            text="自分のことを紹介するオリジナルサイトを作ってみた！"
            skill="React, FramerMotion"
            link="https://inagaki-tsubasa.github.io/website/"
          />

          <Card
            image="../Images/kinggnu.png"
            text="好きなバンドを紹介するギャラリーを作ってみた"
            skill="React, Three.js"
            link="https://inagaki-tsubasa.github.io/kinggnu-gallery/"
          />
          <Card
            image="../Images/majan.png"
            text="大学のHPに自分のページを載せてもらった！"
            skill="React, TypeScript, Material UI"
            link="https://inagaki-tsubasa.github.io/university-website/"
          />
          <Card
            image="../Images/bootstrap.png"
            text="Bootstrapでサイトを作ってみた"
            skill="Bootstrap"
            link="https://inagaki-tsubasa.github.io/Bootstrap-Responsive-Design./"
          />
          <Card
            image="../Images/todo.png"
            text="Hooksを使ってtodoリストを作った"
            skill="React, Hooks"
            link="https://inagaki-tsubasa.github.io/todolists/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
