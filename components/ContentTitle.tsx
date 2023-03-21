import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const ContentTitle = (props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return (
      <div className={styles.contentsTitle}>
          <div className={styles.titles}>
              <h1>{props.title}</h1>
              <p>{props.text}</p>
          </div>
      </div>
    )
  }
  
  export default ContentTitle