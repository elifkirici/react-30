import { render, screen,hasInputValue } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("search test", () => {
  render(<Search />);
  test("search test", () => {
const input=screen.getByLabelText("Emoji Search");
    userEvent.change(input, { target: { value: "Yummy" } })
    expect(hasInputValue(input, "Yummy")).toBe(true)
  });
});
