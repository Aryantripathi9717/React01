import Header from './component/Header'
import './App.css'
import Footer from './component/Footer'
import Forming from './component/Forming'

function App  ()  {
  let obj = {deepak:"nimesh", age : '20'};
  return (
    <div style={{position:"relative",height:'100vh', width:'100vw'}}>
    <Header title={'this is my header'} color={"red"} year="2026" month="june"/>
    {/* <Header title={'Title'} /> */}
    <Footer year={2026} company={'kiet'} obj = {obj}/>

    <card>
      <h1>Product:</h1>
      <p>Description: </p>
      <p>Price: </p>
    </card>

    </div>
  )
}

export default App