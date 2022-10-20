import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

function Main() {
  return (
    <div className='main'>
       <button>
          <Link className='f' to="List">Show Character</Link>
          </button>
    </div>
  )
}

export default Main