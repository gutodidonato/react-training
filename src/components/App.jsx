import React from "react";
import Contatos from "../components/Contatos";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contato) => (
        <Contatos
          id={contato.id}
          name={contato.name}
          img={contato.imgURL}
          telefone={contato.phone}
          email={contato.email}
        />
      ))}
    </div>
  );
}

export default App;
