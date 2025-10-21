import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  expect(screen.getByText('Learn React')).toBeInTheDocument(); // Initial render
  expect(todo).toHaveClass('line-through');                    // Toggle
  expect(todo).not.toBeInTheDocument();                        // Delete
});
