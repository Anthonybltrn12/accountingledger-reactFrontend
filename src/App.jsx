import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionList from './components/TransactionList.jsx';
import Balance from './components/Balance.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/balance" element={<Balance />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
