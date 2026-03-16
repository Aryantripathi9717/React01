import { useState } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])
  // const [amount,setAmount] = useState("");
  const [income,setIncome] = useState(0);
  const [expenses,setExpenses] = useState(0);

  function handleTransaction(e){
    e.preventDefault();
    if(e.target.amt.value==="") {
        e.target.trans.value = ""
        alert("Amount Can't be Blank")
        return;
    }
    if(e.target.trans.value==="") {
        e.target.amt.value = "";
        alert("Transaction Can't be Blank")
        return;
    }
    let number = parseInt( e.target.amt.value);
    const trans = e.target.trans.value;
    setTransactions(prev =>[...prev , trans + `${number}`])
    number>0 ? setIncome(prev => prev+number) : setExpenses(prev => prev+number);
    // setAmount("");
    e.target.trans.value = "";
     e.target.amt.value = ""
  }


  return (
    <>
      <form onSubmit={e=>handleTransaction(e)}>
        <input type="text" placeholder='Add Transaction' name = "trans"/>
        <br /><br />
        <input type="text" placeholder='Add Amount' name="amt"/>
        <br /><br />
        <button >Add Transaction</button>
      </form>
      {
        transactions.map((ele,index)=>(
         <span key={index}> <p>{ele}</p>
         </span>
          
        ))
      }
      <h3>Total Income : {income}</h3>
      <h3>Total Expenses : {expenses}</h3>
    </>
  )
}

export default App
