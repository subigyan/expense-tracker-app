import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    const { deleteT } = useContext(GlobalContext);

    return (
        <>
            <li className={transaction.amount > 0 ? "plus" : "minus"}>
                {transaction.text}{" "}
                <span>
                    {transaction.amount > 0 ? "+" : "-"}$
                    {Math.abs(transaction.amount)}
                </span>
                <button
                    className="delete-btn"
                    onClick={() => deleteT(transaction.id)}
                >
                    x
                </button>
            </li>
        </>
    );
};

export default Transaction;
