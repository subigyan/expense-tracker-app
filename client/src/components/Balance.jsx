import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { addComma } from "../utility";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts
        .reduce((sum, amount) => (sum += amount), 0)
        .toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">$ {addComma(total)}</h1>
        </>
    );
};

export default Balance;
