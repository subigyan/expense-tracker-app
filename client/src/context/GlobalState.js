import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

export const initialState = {
    transactions: [],
    error: null,
    loading: true,
};

// transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
// ],

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    async function getTransactionsData() {
        try {
            const res = await axios("/api/transactions");
            console.log(res.data.data);
            dispatch({
                type: "GET",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.response.data.error,
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/transactions/${id}`);
            dispatch({
                type: "DELETE",
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: "ERROR",
                payload: err.response.data.error,
            });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post(
                "/api/transactions",
                transaction,
                config
            );

            dispatch({
                type: "ADD",
                payload: res.data.data,
            });
        } catch (err) {
            // console.log(err.response);
            dispatch({
                type: "ERROR",
                payload: err.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                error: state.error,
                loading: state.loading,
                deleteT: deleteTransaction,
                addT: addTransaction,
                getTData: getTransactionsData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
