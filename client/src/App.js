import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Transactions from "./components/Transactions";
import AddTransactions from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <div className="container">
                <Header />
                <div className="box1">
                    <Balance />
                    <IncomeExpense />
                </div>
                <AddTransactions />
                <Transactions />
            </div>
        </GlobalProvider>
    );
}

export default App;
