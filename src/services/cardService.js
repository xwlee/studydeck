export function getCards() {
  return fetch("/api/card").then((res) => res.json());
}

export function destroyCard(id) {
  return fetch(`/api/card/${id}`, { method: "DELETE" });
}

export function saveCard(card) {
  return card.id ? updateCard(card) : createCard(card);
}

export function createCard(card) {
  return fetch("/api/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => res.json());
}

export function updateCard(card) {
  return fetch(`/api/card/${card.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then((res) => res.json());
}
