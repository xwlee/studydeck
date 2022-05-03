import React, { useState } from "react";

import { saveCard } from "../services/cardService";

export function CardForm({ onSave, onCancel, card }) {
  const id = card && card.id ? card.id : undefined;

  const [term, setTerm] = useState(id ? card.term : "");
  const [definition, setDefiniton] = useState(id ? card.definition : "");

  function handleSubmit(event) {
    event.preventDefault();
    saveCard({ term, definition, id }).then((card) => {
      clearForm();
      onSave && typeof onSave === "function" && onSave(card);
    });
  }

  function clearForm() {
    setTerm("");
    setDefiniton("");
    onCancel && typeof onCancel === "function" && onCancel();
  }

  function handleTermChange(event) {
    const { value } = event.target;
    setTerm(value);
  }

  function handleDefChange(event) {
    const { value } = event.target;
    setDefiniton(value);
  }

  return (
    <div className="tile">
      <h4>{id ? "Update Card" : "Add Card"}</h4>
      <form onReset={clearForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`card_term_${id ? id : "new"}`}>term</label>
          <textarea
            id={`card_term_${id ? id : "new"}`}
            value={term}
            onChange={handleTermChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor={`card_definition_${id ? id : "new"}`}>
            definition
          </label>
          <textarea
            id={`card_definition_${id ? id : "new"}`}
            value={definition}
            onChange={handleDefChange}
          ></textarea>
        </div>
        <div className="buttons">
          <button className="primary" type="submit">
            save
          </button>
          <button className="secondary" type="reset">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
