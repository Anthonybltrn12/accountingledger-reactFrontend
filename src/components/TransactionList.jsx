import React, {useEffect, useState} from "react";
import Balance from "./Balance";
import './TransactionList.css'

function TransactionList(){
    const [trans, setTrans] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8080/transactions')
        .then(response => response.json())
        .then(data => setTrans(data))
        .catch(error => console.error('error fetching users:', error));
    },[]);

    return(
         <>
      <h1>Transactions</h1>
      <Balance />

      {trans.map(transaction => (
        <div className="transaction-card" key={transaction.transactionId}>
          <h3>{transaction.description}</h3>
          <p>{transaction.vendor}</p>
           {transaction.categoryId === 1 ? (
      <p className="deposits">${transaction.amount}</p>
    ) : (
      <p className="payments">-${transaction.amount}</p>
    )}
        </div>
      ))}
      
    </>
    )

}

export default TransactionList