import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Character() {
  const { index } = useParams();

  const [Character, setCharacter] = useState([]);
  useEffect(() => {
    axios(
      `https://www.breakingbadapi.com/api/characters/${parseInt(index) + 1}`
    ).then((res) => setCharacter(res.data));
  }, [index]);
  return (
    <div className="Character">
      <h1>Character Detail</h1>
      {Character.map((chrctr, index) => (
        <div key={index}>
          <div className="row Detail">
            <div className="col-12 col-sm-12 col-md-5 imgCharacter">
              <img src={chrctr.img} alt={chrctr.name} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 detailCharacter">
              <div className="row">
                <div className="article">
                  <h3 className="top">Name:</h3>
                  <h3 className="text">{chrctr.name}</h3>
                </div>
                <div className="article">
                  <h3 className="top">Nickname:</h3>
                  <h3 className="text">{chrctr.nickname}</h3>
                </div>
                <div className="article">
                  <h3 className="top">Birthday:</h3>
                  <h3 className="text">{chrctr.birthday}</h3>
                </div>
                <div className="article">
                  <h3 className="top">Status:</h3>
                  <h3 className="text">{chrctr.status}</h3>
                </div>
                <div className="article">
                  <h3 className="top">Portrayed:</h3>
                  <h3 className="text">{chrctr.portrayed}</h3>
                </div>
                <div className="article">
                  <h3 className="top">Category:</h3>
                  <h3 className="text">{chrctr.category}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="nextButton mt-3">
        <button className="btn btn-dark">
          <Link to={`/Character/${parseInt(index) + 1}`}>Next Character</Link>
        </button>
      </div>
    </div>
  );
}

export default Character;
