import React from 'react';
import styles from './Footer.module.css';

interface FooterLinksProps {
  title: string;
  items: { text: string; href: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, items }) => (
  <div className={styles.footerLinks}>
    <div className={styles.footerTitle}>{title}</div>
    {items.map(item => (
      <a key={item.text} href={item.href} className={styles.footerLink}>
        {item.text}
      </a>
    ))}
  </div>
);

export default FooterLinks;
