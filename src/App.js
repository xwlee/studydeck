import { Router } from "@reach/router";
import React, { useEffect, useState } from "react";

import "./normalize.css";
import "./App.css";
import { CardList } from "./components/CardList";
import { Practice } from "./components/Practice";
import { getCards } from "./services/cardService";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

  function handleRemove(id) {
    setCards((existing) => existing.filter((c) => c.id !== id));
  }

  function handleAdd(card) {
    setCards((existing) => [...existing, card]);
  }

  function handleUpdate(card) {
    setCards((existing) => existing.map((c) => (c.id === card.id ? card : c)));
  }

  return (
    <div>
      <div>
        <header>
          <h1>
            Study<span className="titleHighlight">Deck</span>
          </h1>
          <h2>Retention through repitition</h2>
        </header>
        <main>
          <Router>
            <CardList
              path="/"
              cards={cards}
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
            />
            <Practice path="/practice" cards={cards} />
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
