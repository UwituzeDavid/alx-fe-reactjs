import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master React Query')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Write tests' } });
    fireEvent.click(button);

    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('toggles a todo as completed and back', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    expect(todoItem).not.toHaveClass('line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('line-through');


    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass('line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build a Todo App');
    const deleteButtons = screen.getAllByText(/delete/i);
    const deleteButton = deleteButtons.find((btn) =>
      btn.closest('li')?.textContent.includes('Build a Todo App')
    );

    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});