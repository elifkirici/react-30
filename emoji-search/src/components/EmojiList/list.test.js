import { render, screen } from "@testing-library/react";

import List from "./List";

describe("List test", () => {
  render(<List />);
  test("List test", () => {
    const items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });
});
