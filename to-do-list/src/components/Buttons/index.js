import React from 'react'

function Buttons({setFilter}) {


  return (
    <div className='buttons'>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=> setFilter("active")}>Active</button>
       <button onClick={()=>setFilter("completed")}>Completed</button> 
    </div>
  )
}

export default Buttons