import React from 'react';
import { paymentsMethods } from '../../const/paymentMethods';
import { socials } from '../../const/socials';
import { footerLinks } from '../../const/footerLinks';
import { FooterLinks } from './FooterLinks';
import { IoIosStar } from 'react-icons/io';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-payments-container']}>
        <div className={styles['footer-payments']}>
          {paymentsMethods.map(item => (
            <img
              key={item.img}
              width={item.width}
              height={item.height}
              src={`/assets/${item.img}`}
              className={styles['payments-img']}
              alt={item.img}
            />
          ))}
          <span>and 50+ more</span>
        </div>
      </div>
      <div className={styles['footer-main-container']}>
        <div className={styles['footer-main']}>
          <div className={styles['footer-socials']}>
            {socials.map(item => (
              <a
                key={item.name}
                className={`${styles['socials']} ${styles[item.name]}`}
                href={item.link}
                target="__blank"
                rel="noopener noreferrer"
              >
                <item.Icon className={styles['socials-icon']} />
              </a>
            ))}
          </div>
          <div className={styles['footer-links-container']}>
            <div className={styles['footer-logo-container']}>
              <img
                src="/assets/chicks-logo-large.svg"
                width={200}
                height={50}
                alt="chicks-logo"
                className={styles['footer-logo']}
              />
              <a href="mailto:support@chicksgold.com" className={styles['footer-email']}>
                support@chicksgold.com
              </a>
            </div>
            {footerLinks.map(item => (
              <FooterLinks
                key={item.title}
                title={item.title}
                items={item.items as { text: string; href: string }[]}
              />
            ))}
            <div className={styles['footer-rating-container']}>
              <div className={styles['footer-rating']}>
                {[1, 2, 3, 4, 5].map(star => (
                  <div className={styles['rating-start']} key={star}>
                    <IoIosStar />
                  </div>
                ))}
              </div>
              <div className={styles['footer-rating-text']}>Trustpilot Reviews</div>
            </div>
          </div>
          <div className={styles['footer-copyright']}>
            © 2017 - 2020 ChicksGold.com. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
