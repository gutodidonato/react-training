import React from "react";

const Contatos = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{props.telefone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Contatos;
