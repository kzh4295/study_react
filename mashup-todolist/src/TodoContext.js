import React, {useReducer, createContext} from 'react';

const initialTodos =[
  {
    id : 1, 
    text: '일어나자 마자 운동',
    done: true
  }, 
  {
    id: 2,
    text: '운동 다녀오자마자 식사',
    done: true
  },
  {
    id: 3,
    text: '식사 후 바로 카페',
    done: false
  },
  {
    id : 4,
    text: '카페 도착해 25분 집중',
    done: false
  }
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return children;
}