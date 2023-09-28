import React from "react";
import Card from "./Cards/index";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Card
            key={emoji.id}
            img={emoji.emoji}
            name={emoji.name}
            text={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
