import React from "react";
import styles from "./Card.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface CardInputProps {
    quantity: number;
    setQuantity: (value: number) => void;
}

const CardInput: React.FC<CardInputProps> = ({ quantity, setQuantity }) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles["card-input-container"]}>
            <input
                className={styles["card-input"]}
                type="number"
                name="number"
                value={quantity}
                onChange={onChange}
            />
            <IoMdArrowDropup className={styles["caret-up"]} onClick={handleIncrease} />
            <IoMdArrowDropdown className={styles["caret-down"]} onClick={handleDecrease} />
        </div>
    );
};

export default CardInput;
