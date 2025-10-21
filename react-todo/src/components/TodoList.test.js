import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Check that initial todos render
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Check that a new todo can be added
test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add/i);

  fireEvent.change(input, { target: { value: "Test new task" } });
  fireEvent.click(button);

  expect(screen.getByText("Test new task")).toBeInTheDocument();
});

// Check that clicking a todo toggles its completion
test("toggles todo completion when clicked", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

// Check that the delete button removes a todo
test("deletes a todo when delete button is clicked", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
