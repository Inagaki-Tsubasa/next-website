import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card';
import ContentTitle from '@/components/ContentTitle';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <div className={styles.skills}>
        <ContentTitle title="MY SKILLS PAGE." text="私の学習まとめページ" />
        <div className={styles.skillsContent}>

          <Card  
          image="../Images/newapp.png"
          text="Next.jsで自己紹介サイトをリニューアルした！！" 
          skill="Next.js, Typescript"
          link="https://inagaki-tsubasa.github.io/website/"
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


