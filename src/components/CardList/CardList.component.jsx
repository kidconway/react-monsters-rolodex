import React from "react";

import Card from "../Card/Card.component";

import "./CardList.styles.css";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
