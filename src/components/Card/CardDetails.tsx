import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoMdCart } from 'react-icons/io';

import CardInput from './CardInput';

import styles from './CardDetails.module.css';

interface CardDetailsProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number | null;
  status?: string;
  stockStatus?: string;
  stockTooltip?: string;
  description: string;
  available?: boolean;
  onAdd?: (quantity: number) => void;
  gameType: string;
}

const GAME_ICONS = {
  'Diablo 2 Resurrected':
    'https://chicks-games.s3.amazonaws.com/19c920e8-47d4-4718-b511-a9a02d886ff6',
  OSRS: 'https://chicks-games.s3.amazonaws.com/ae72ce8a-e872-484d-8159-b36930a509cb',
  RS3: 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601',
};

const CardDetails: React.FC<CardDetailsProps> = ({
  image,
  title,
  price,
  originalPrice,
  status,
  stockStatus,
  stockTooltip,
  description,
  available = true,
  onAdd,
  gameType,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    onAdd?.(quantity);
    setQuantity(1);
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.productImage} />
          {status && (
            <div className={styles.statusBadge}>
              <GoDotFill className={styles.statusDot} />
              {status}
            </div>
          )}
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.brandSection}>
              <span className={styles['card-product-brand']}>
                <span className={styles.gameIconWrapper}>
                  <img
                    src={GAME_ICONS[gameType as keyof typeof GAME_ICONS]}
                    alt={gameType}
                    className={styles.gameIcon}
                  />
                </span>
              </span>
              <span>{gameType}</span>
            </div>
          </div>
        </div>

        <div className={styles.priceSection}>
          <div className={styles.priceWrapper}>
            <span className={styles.currentPrice}>${price.toFixed(2)}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>${originalPrice.toFixed(2)}</span>
            )}
          </div>
          {originalPrice && (
            <div className={styles.discountBadge}>
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </div>
          )}
        </div>

        <div className={styles.descriptionSection}>
          <h3>Description</h3>
          <p>{description}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.availabilitySection}>
            <span className={styles.availabilityLabel}>Availability:</span>
            <span
              className={`${styles.availabilityStatus} ${
                available ? styles.available : styles.unavailable
              }`}
            >
              {available ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <div className={styles.cartSection}>
            <CardInput quantity={quantity} setQuantity={setQuantity} />
            <button
              className={`${styles.addToCartButton} ${!available ? styles.disabled : ''}`}
              disabled={!available}
              onClick={handleAddToCart}
            >
              <IoMdCart className={styles.cartIcon} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
