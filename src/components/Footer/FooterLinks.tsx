import React from "react";
import styles from "./Footer.module.css";

interface FooterLinksProps {
  title: string;
  items: { text: string; href: string }[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ title, items }) => (
  <div className={styles["footer-links"]}>
    <div className={styles["title"]}>{title}</div>
    {items.map((item) => (
      <a key={item.text} href={item.href} className={styles["link"]}>
        {item.text}
      </a>
    ))}
  </div>
);
