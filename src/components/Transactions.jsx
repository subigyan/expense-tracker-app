import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import Transaction from "./Transaction";

const Transactions = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="box3">
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transac) => {
                    return (
                        <Transaction key={transac.id} transaction={transac} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Transactions;
