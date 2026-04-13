import { useState, setEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  // setEffect(()=>{
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(response => response.json())
  // .then(user => {
  //   setUsers(user)
  // })
  // },[])

  return (
    <>
    {
      users.map((name)=>(
        {name}
      ))
    }
    </>
  )
}

export default App
