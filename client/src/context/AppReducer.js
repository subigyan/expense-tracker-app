// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    switch (action.type) {
        case "GET":
            return {
                ...state,
                loading: false,
                transactions: action.payload,
            };
        case "DELETE":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== action.payload
                ),
            };

        case "ADD":
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };

        case "ERROR":
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}
