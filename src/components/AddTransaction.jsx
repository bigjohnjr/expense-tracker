import { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          className="add-transaction"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          className="add-transaction"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <button className="add-btn">Add Transaction</button>
    </>
  );
}

export default AddTransaction;
