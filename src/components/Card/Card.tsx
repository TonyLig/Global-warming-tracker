import React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";

// Props interface for the Card component
interface Props {
  imageCard: string;
  pageLink: string;
  accessibilityDescription: string;
  titleCard: string;
  onClick?: () => void;
}

// Card component to display an image with a title and navigate to a link
export default function Card({
  imageCard,
  pageLink,
  accessibilityDescription,
  titleCard,
  onClick,
}: Props) {
  return (
    <Link to={pageLink} onClick={onClick}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={imageCard}
          alt={accessibilityDescription}
        />

        <div className={styles.over}>
          <h1 className={styles.title}>{titleCard}</h1>
        </div>
      </div>
    </Link>
  );
}
