import React from 'react'
function InfoBtn({selected, setSelected,index}) {

    const getInfo=(index)=>{
      if(selected===index){
        return setSelected(false)
      }
      setSelected(index)
    }
  return (
    <>
        <button onClick={()=> getInfo(index)}>{selected===index?'-':'+'}</button>
    </>
  )
}

export default InfoBtn