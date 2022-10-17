import React from "react";

function List({ list, removeItem, handleTests,filter }) {

  return (
    <div className="list">
     <h1 className={list.length> 0 ?"header-none":"header"}>There is no todo</h1>
      <ul>
        { filter==="all" ? list.map((item, i) => (
          <li key={i}>
            <button>
              <i onClick={(e) => handleTests(i)} className={ 
                item.isChecked === true
                ? "fa-regular fa-circle-check"
                : "fa-regular fa-circle"}/>
            </button>
            <p className={item.isChecked === true ? "text-overline" : "text-item"}>
              {item.text}
            </p>
            <button onClick={(e) => removeItem(item.text)} className="remove">
              <i className="fa-sharp fa-solid fa-xmark" />
            </button>
          </li>
        )): filter==="active" ?  list.filter((item) => item.isChecked === false).map((item, i) => (
            <li key={i}>
              <button>
                <i onClick={(e) => handleTests(i)} className={ 
                  item.isChecked === true
                  ? "fa-regular fa-circle-check"
                  : "fa-regular fa-circle"}/>
              </button>
              <p className={item.isChecked === true ? "text-overline" : "text-item"}>
                {item.text}
              </p>
              <button onClick={(e) => removeItem(item.text)} className="remove">
                <i className="fa-sharp fa-solid fa-xmark" />
              </button>
            </li>
          )):  list.filter((item) => item.isChecked === true).map((item, i) => (
            <li key={i}>
              <button>
                <i onClick={(e) => handleTests(i)} className={ 
                  item.isChecked === true
                  ? "fa-regular fa-circle-check"
                  : "fa-regular fa-circle"}/>
              </button>
              <p className={item.isChecked === true ? "text-overline" : "text-item"}>
                {item.text}
              </p>
              <button onClick={(e) => removeItem(item.text)} className="remove">
                <i className="fa-sharp fa-solid fa-xmark" />
              </button>
            </li>
          ))} 
      </ul>
    </div>
  );
}

export default List;
