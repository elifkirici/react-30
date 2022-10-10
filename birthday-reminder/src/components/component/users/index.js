import React from "react";
import "./styles.css";
import ClearButton from "../button/index";

function ShowUser({ Users, setUsers }) {
  const removeUser = (index) => () =>
    setUsers((Users) => Users.filter((_, i) => i !== index));

  const listItems = Users.map((user, index) => (
    <li key={index}>
      <img src={user.img} className="img-fluid" alt={user.title} />
      <div className="listText">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-age">{user.age}</p>
      </div>
      <div>
        <button onClick={removeUser(index)} className="clearUser">
          x
        </button>
      </div>
    </li>
  ));

  return (
    <div className="AppUser">
      <div className="listUser">
        <h3 className="header">{Users.length} Birthday Today</h3>
        <hr />
        <ul>{listItems}</ul>
        <ClearButton setUsers={setUsers} />
      </div>
    </div>
  );
}

export default ShowUser;
