import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);

    const expenseList = amounts.filter((amount) => amount < 0);

    const totalExp = Math.abs(
        expenseList.reduce((sum, expense) => (sum += expense), 0)
    );

    const IncomeList = amounts.filter((amount) => amount > 0);

    const totalInc = IncomeList.reduce((sum, expense) => (sum += expense), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                    ${totalInc}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">
                    ${totalExp}
                </p>
            </div>
        </div>
    );
};

export default IncomeExpense;
