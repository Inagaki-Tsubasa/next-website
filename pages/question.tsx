import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ContentTitle from '@/components/ContentTitle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
      <>
        <Header />
          <ContentTitle title="MY QUESTION PAGE." text="私のQ & Aページ" />
          <div className={styles.questionSection}>
            <div className={styles.questionAnswer}>
              <h1 className={styles.question}>Q. フロントエンジニアになりたいと思った理由はなんですか？</h1>
              <h1 className={styles.answer}>A. 大学の講義で初めてコードを書いたときに、とにかく楽しかったからです。</h1>
              <h1 className={styles.question}>Q. 今後、どのようなエンジニアになりたいと考えていますか？</h1>
              <h1 className={styles.answer}>A. UI/UXデザインを重要視したフルスタックエンジニアを目指したいです。</h1>
              <h1 className={styles.question}>Q. なんの教材を使って勉強していますか？</h1>
              <h1 className={styles.answer}>A. YouTubeやUdemyの教材や、Qiitaを参照して勉強しています。</h1>
              <h1 className={styles.question}>Q. 今、どのようなことを勉強していますか？</h1>
              <h1 className={styles.answer}>A. Three.jsで3Dアニメーションの作成を勉強しています。</h1>
            </div>
          </div>
          <Footer />
       </>
    )
  }
  
  