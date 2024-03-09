import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hellow React</h1>
      <Persion></Persion>
    </>
  )
}
function Persion (){
return(
    <div> Hellow Byzid</div>


)

}

export default App
