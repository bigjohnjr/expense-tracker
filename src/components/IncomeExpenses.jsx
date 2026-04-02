import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="expenses-container">
      <div>
        <h4>INCOME</h4>
        <div className="money income">{income}</div>
      </div>
      <div>
        <h4>EXPENSES</h4>
        <div className="money expense">{expense}</div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
