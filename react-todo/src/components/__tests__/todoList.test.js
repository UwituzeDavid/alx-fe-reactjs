// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  //  Test 1: Renders initial todos
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  //  Test 2: Adds a new todo
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  // Test 3: Toggles a todo’s completed status
  test("toggles a todo’s completed status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Toggle it
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  //  Test 4: Deletes a todo
  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = todoItem.nextSibling; // The delete button beside it

    fireEvent.click(deleteButton);

    // Ensure it's removed from the DOM
    expect(todoItem).not.toBeInTheDocument();
  });
});
