import React, { useState } from "react";
import CardInput from "./CardInput";
import { GoDotFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import Modal from "../Modal/Modal";
import CardDetails from "./CardDetails";
import styles from "./Card.module.css";

interface CardProps {
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

const Card: React.FC<CardProps> = ({
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const GAME_ICONS = {
    'Diablo 2 Resurrected': 'https://chicks-games.s3.amazonaws.com/19c920e8-47d4-4718-b511-a9a02d886ff6',
    'OSRS': 'https://chicks-games.s3.amazonaws.com/ae72ce8a-e872-484d-8159-b36930a509cb',
    'RS3': 'https://chicks-games.s3.amazonaws.com/868e80f5-c433-4a00-9596-21472fac7601'
  };

  return (
    <>
      <div className={styles["card-container"]}>
        <div className={styles["card-head"]}>
          <div className={styles["card-sale-container"]}>
            {status ? (
              <span className={styles["card-sale"]}>
                <GoDotFill className={styles["card-sale-dot"]} />
                <span className={styles["card-sale-text"]}>{status}</span>
              </span>
            ) : null}
            {stockStatus && (
              <span className={styles["card-stock"]} title={stockTooltip}>
                {stockStatus}
              </span>
            )}
          </div>
          <CardInput quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className={styles["card-tumbnail"]}>
          <img
            src={image}
            width={60}
            height={60}
            className={styles["card-product-thumbnail"]}
            alt={title}
          />
        </div>
        <div className={styles["card-product-content"]}>
          <span className={styles["card-product-name-container"]}>
            <span className={styles["card-product-name"]}>{title}</span>
            <span className={styles["card-product-amount"]}>
              <span>${price.toFixed(2)}</span>
              {originalPrice ? (
                <span className={styles["discounted-amount"]}>
                  ${originalPrice.toFixed(2)}
                </span>
              ) : null}
            </span>
          </span>
          <span className={styles["card-product-brand"]}>
            <span className={styles.gameIconWrapper}>
              <img 
                src={GAME_ICONS[gameType as keyof typeof GAME_ICONS]} 
                alt={gameType}
                className={styles.gameIcon}
              />
            </span>
          </span>
        </div>
        <div className={styles["card-product-description"]}>{description}</div>
        <div className={styles["card-buttons"]}>
          <button 
            className={styles["button-details"]}
            onClick={() => setIsModalOpen(true)}
          >
            Details
          </button>
          <button
            className={styles["button-add"]}
            disabled={!available}
            onClick={() => {
              onAdd?.(quantity);
              setQuantity(1);
            }}
          >
            <span>Add</span>
            <span className={styles["button-add-icon"]}>
              <IoMdCart />
            </span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CardDetails
          image={image}
          title={title}
          price={price}
          originalPrice={originalPrice}
          status={status}
          stockStatus={stockStatus}
          stockTooltip={stockTooltip}
          description={description}
          available={available}
          onAdd={onAdd}
          gameType={gameType}
        />
      </Modal>
    </>
  );
};

export default Card;
