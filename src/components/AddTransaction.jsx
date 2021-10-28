import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const { addT, transactions } = useContext(GlobalContext);

    return (
        <div className="box2">
            <h3>Add new transaction</h3>
            <form
                id="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    addT({
                        id: transactions.length + 1,
                        text: text,
                        amount: +amount,
                    });
                    setText("");
                    setAmount("");
                }}
            >
                <div className="form-control">
                    <label>Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        id="text"
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
