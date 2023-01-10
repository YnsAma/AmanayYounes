import { useState } from 'react'
import ChercheBar from './ChercheBar'
import List from './List'
import './App.css'


function App() {
  const [cle, setCle] = useState("")

  const data=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"legume"},
    {nom:"carotte",type:"legume"},
    {nom:"pomme de terre",type:"legume"},
    {nom:"navet",type:"legume"},
    {nom:"poivron",type:"legume"}
    ]
    
    const filtred =data.filter(function(number) {
      return number.type==cle;
    })
  return ( 
    <div className="App">
      <h1>Composant App</h1>
      <ChercheBar setCle={setCle}/>
      
      <List cle={cle} list={filtred}/>
    </div>
  )
}

export default App
