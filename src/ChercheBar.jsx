import React from 'react'
import { useState } from 'react'
import'./ChercheBar.css'
function ChercheBar({setCle}) {
  const[state,setState] = useState("")
  return (
    <div className='cherche'>
      <h2>composant ChercheBar</h2>
      <h4>Entrer le mot cle de recherche:</h4>
      <input type="text" 
      value={state}
      onChange={(e)=>setState(e.target.value)}/>
      <button onClick={()=>setCle(state)}>Chercher</button>
    </div>
  )
}

export default ChercheBar