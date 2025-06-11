import React from 'react';
import { IoIosStar } from 'react-icons/io';

import { footerLinks } from '../../config/navigation/footer';
import { paymentMethods } from '../../config/payment/methods';
import { socialLinks } from '../../config/social/links';

import FooterLinks from './FooterLinks';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerPaymentsContainer}>
        <div className={styles.footerPayments}>
          {paymentMethods.map(item => (
            <img
              key={item.name}
              width={item.width}
              height={item.height}
              src={`/assets/${item.image}`}
              className={styles.paymentsImg}
              alt={item.alt}
            />
          ))}
          <span>and 50+ more</span>
        </div>
      </div>
      <div className={styles.footerMainContainer}>
        <div className={styles.footerMain}>
          <div className={styles.footerSocials}>
            {socialLinks.map(item => (
              <a
                key={item.platform}
                className={`${styles.social} ${styles[item.platform]}`}
                href={item.url}
                target="__blank"
                rel="noopener noreferrer"
              >
                <item.icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLogoContainer}>
              <img
                src="/assets/chicks-logo-large.svg"
                width={200}
                height={50}
                alt="chicks-logo"
                className={styles.footerLogo}
              />
              <a href="mailto:support@chicksgold.com" className={styles.footerEmail}>
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
            <div className={styles.footerRatingContainer}>
              <div className={styles.footerRating}>
                {[1, 2, 3, 4, 5].map(star => (
                  <div className={styles.ratingStar} key={star}>
                    <IoIosStar />
                  </div>
                ))}
              </div>
              <div className={styles.footerRatingText}>Trustpilot Reviews</div>
            </div>
          </div>
          <div className={styles.footerCopyright}>
            © 2017 - 2020 ChicksGold.com. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
