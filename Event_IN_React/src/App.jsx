import { useState } from 'react'
import './App.css'
import EventToDo from './EventToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EventToDo name={'Aryan Tripathi'}/>
    </>
  )
}

export default App
