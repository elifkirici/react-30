import React from 'react'
import ShowQuestion from './ShowQuestion'
import {useState} from 'react'

function AccordionApp() {
  const [selected,setSelected] = useState(false)

  return (
    <div className='container'>
       <ShowQuestion selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default AccordionApp