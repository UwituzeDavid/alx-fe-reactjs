import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Enter new todo");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});
