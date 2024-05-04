import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: uuidv4(),
    text,
  }
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id
});
