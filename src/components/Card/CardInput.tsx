import React, { useState } from "react";
import styles from "./Card.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const CardInput: React.FC = () => {
    const [number, setNumber] = useState<number>(1);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value));
    };
    const handleIncrease = () => {
        setNumber(number + 1);
    };
    const handleDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div className={styles["card-input-container"]}>
            <input
                className={styles["card-input"]}
                type="number"
                name="number"
                value={number}
                onChange={onChange}
            />
            <IoMdArrowDropup className={styles["caret-up"]} onClick={handleIncrease} />
            <IoMdArrowDropdown className={styles["caret-down"]} onClick={handleDecrease} />
        </div>
    );
};

export default CardInput;