import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../assets/actions';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todo.value;
    if (text.trim()) {
      addTodo(text);
      e.target.elements.todo.value = '';
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" placeholder="Enter a todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
