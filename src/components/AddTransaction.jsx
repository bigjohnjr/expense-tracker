import { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleAddText(e) {
    setText(e.target.value);
  }

  function handleAddAmount(e) {
    e.preventDefault();
    setAmount(e.target.value);
  }

  return (
    <>
      <div>Text</div>
      <input
        className="add-transaction"
        value={text}
        onChange={handleAddText}
      />
      <div>Amount</div>
      <input
        className="add-transaction"
        value={amount}
        onChange={handleAddAmount}
      />
    </>
  );
}

export default AddTransaction;
