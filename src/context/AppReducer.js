// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };

        case "ADD":
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };

        default:
            return state;
    }
}
