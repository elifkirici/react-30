import React from "react";
import Buttons from "./Buttons";
import List from "./list";
import { useState, useEffect } from "react";

function ListApp() {
  const [list, setList] = useState([]);
  const [input, setinput] = useState("");
  const [filter,setFilter]=useState("all")

  const addList =  (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setList([...list, { text: e.target.value, isChecked: false }]);
      setinput((e.target.value = ""));
    }
  };
  
  useEffect(()=>{
    const localData = localStorage.getItem('Data') 
    if(localData){
    setList(JSON.parse(localData))
    }
  },[])

  useEffect(()=>{
    if(list.length > 0 ) localStorage.setItem('Data',JSON.stringify(list)) 
  },[list])

  


  const handleTests = (index) => {
    let updateData = list.map((item, i) => {
      return index === i ? { ...item, isChecked: !item.isChecked } : item;
    });
    setList(updateData);
    localStorage.setItem('Data',JSON.stringify(updateData))

  };

  const removeItem = (text,index) => {
    let removeList = list.filter((item, i) => item.text !== text);
    setList(removeList);
    localStorage.setItem('Data',JSON.stringify(removeList))

  };

  return (
    <div className="main">
      <div className="action-container">
        <h1>To Do List</h1>
        <input
          value={input}
          placeholder="ADD TO DO"
          onChange={(e) => {
            setinput(e.target.value);
          }}
          onKeyDown={addList} />
        <Buttons setFilter={setFilter} />
      </div>
      
  
     <List list={list} removeItem={removeItem} handleTests={handleTests} filter={filter}/> 
    </div>
  );
}

export default ListApp;
