import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";
import { getCards } from "./services/cardService";

jest.mock("./services/cardService");

it("Renders cards from the API", async () => {
  const mockCards = [
    { id: 1, term: "Question 1", definition: "Answer 1" },
    { id: 2, term: "Question 2", definition: "Answer 2" },
    { id: 3, term: "Question 3", definition: "Answer 3" },
  ];
  getCards.mockResolvedValue(mockCards);
  render(<App />);

  mockCards.forEach(async (card) => {
    await screen.findByText(card.term);
  });
});
