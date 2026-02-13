import { useState } from 'react'
// import './App.css'
import EventToDo from './EventToDo'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventToDo name={'Aryan Tripathi'}/>
      {/* <Counter/> */}
    </>
  )
}

export default App
