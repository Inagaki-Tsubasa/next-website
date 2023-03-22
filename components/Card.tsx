import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Inter } from "next/font/google";
import styles from "./Card.module.css";

const inter = Inter({ subsets: ["latin"] });

const Card = (props: {
  image: string | undefined;
  text:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  skill:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  link: string | undefined;
}) => {
  return (
    <div className={styles.cards}>
      <img src={props.image} alt="" />
      <div className={styles.cardsBody}>
        <h2>{props.text}</h2>
        <p>[学習した内容]</p>
        <h5>{props.skill}</h5>
        <a href={props.link}>サイトを見に行く→</a>
      </div>
    </div>
  );
};

export default Card;
