import React from 'react'
import'./List.css'
function List(props) {
  return (
    <div>
      <p>le type:{props.cle}</p>
      {props.list.map((ele)=><p>{ele.nom}</p>)}
    </div>
  )
}

export default List