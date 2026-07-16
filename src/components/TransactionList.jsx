import React, {useEffect, useState} from "react";

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

      {trans.map(transaction => (
        <div key={transaction.transactionId}>
          <h3>{transaction.description}</h3>
          <p>{transaction.vendor}</p>
           {transaction.categoryId === 1 ? (
      <p>${transaction.amount}</p>
    ) : (
      <p>-${transaction.amount}</p>
    )}
        </div>
      ))}
    </>
    )

}

export default TransactionList