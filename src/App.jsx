import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
