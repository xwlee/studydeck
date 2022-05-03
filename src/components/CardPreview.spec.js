import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import { CardPreview } from "./CardPreview";

it("Renders the expected term", () => {
  const expectedTerm = "this is a test";
  render(<CardPreview term={expectedTerm} />);

  expect(screen.getByText(expectedTerm)).toBeInTheDocument();
});

it("Flips the card reveal the definition", () => {
  const expectedTerm = "This is the term";
  const expectedDef = "This is the definition";
  render(<CardPreview term={expectedTerm} definition={expectedDef} />);

  expect(screen.getByText(expectedTerm)).toBeInTheDocument();

  const flipButton = screen.getByText(/show/i);
  fireEvent.click(flipButton);

  expect(screen.getByText(expectedDef)).toBeInTheDocument();
  expect(screen.queryByText(expectedTerm)).not.toBeInTheDocument();
});
