import React, { useState, useRef } from "react";
import CardInput from "./CardInput";
import { GoDotFill } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
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
    onAdd
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [shouldShowTooltip, setShouldShowTooltip] = useState(false);
    const descRef = useRef<HTMLDivElement>(null);

    const [quantity, setQuantity] = useState<number>(1);

    const checkTruncation = () => {
        const el = descRef.current;
        if (!el) return false;
        return el.scrollHeight > el.clientHeight + 1;
    };

    const handleMouseEnter = () => {
        if (checkTruncation()) {
            setShouldShowTooltip(true);
            setShowTooltip(true);
        } else {
            setShouldShowTooltip(false);
            setShowTooltip(false);
        }
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-head"]}>
                <div className={styles["card-sale-container"]}>
                    {status ? (
                        <span className={styles["card-sale"]}>
                            <GoDotFill className={styles["card-sale-dot"]} />
                            <span className={styles["card-sale-text"]}>
                                {status}
                            </span>
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
                    <span className={styles["card-product-name"]}>
                        {title}
                    </span>
                    <span className={styles["card-product-amount"]}>
                        <span>
                            ${price.toFixed(2)}
                        </span>
                        {originalPrice ? (
                            <span className={styles["discounted-amount"]}>
                                ${originalPrice.toFixed(2)}
                            </span>
                        ) : null}
                    </span>
                </span>
                <span className={styles["card-product-brand"]}>
                    <RiReactjsLine />
                </span>
            </div>
            <div
                className={styles["card-product-description"]}
                ref={descRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {description}
            </div>
            {showTooltip && shouldShowTooltip && (
                <div className={styles["card-tooltip"]}>
                    {description}
                </div>
            )}
            <div className={styles["card-buttons"]}>
                <button className={styles["button-details"]}>
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
                    <span className={styles["button-add-icon"]}><IoMdCart /></span>
                </button>
            </div>
        </div>
    );
};

export default Card;
