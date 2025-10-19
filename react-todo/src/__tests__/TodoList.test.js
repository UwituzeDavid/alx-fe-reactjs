import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Enter new todo');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  expect(todo).not.toHaveClass('line-through');
  fireEvent.click(todo);
  expect(todo).toHaveClass('line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  const deleteButton = todo.nextSibling;
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});
