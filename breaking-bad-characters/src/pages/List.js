import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const [Characters, setCharacters] = useState([]);
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters`).then((res) =>
      setCharacters(res.data)
    );
  }, []);
  return (
    <div className="List">
      {Characters.map((character,index) => (
        <div className="card">
          <img
            src={character.img}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body">
            <button className="btn btn-dark">
              <Link className="f" to={`/Character/${index}`}>
                {character.name}
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
