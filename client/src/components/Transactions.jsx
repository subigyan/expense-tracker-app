import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import Transaction from "./Transaction";

const Transactions = () => {
    const { transactions, getTData } = useContext(GlobalContext);
    useEffect(() => {
        getTData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="box3">
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transac) => {
                    return (
                        <Transaction key={transac._id} transaction={transac} />
                    );
                })}
            </ul>
        </div>
    );
};

export default Transactions;
