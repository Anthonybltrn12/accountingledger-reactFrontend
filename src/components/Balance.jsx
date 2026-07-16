import { useEffect, useState } from "react";

function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/transactions/balance")
      .then(response => response.json())
      .then(data => setBalance(data));
  }, []);

  return (
    <h2>
      Balance: ${balance}
    </h2>
  );
}

export default Balance;