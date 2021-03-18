import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="눈뜨자마자 운동" done={true} />
      <TodoItem text="운동다녀오자마자 식사" done={true} />
      <TodoItem text="식사 후 바로 카페" done={false} />
      <TodoItem text="카페에서 25분 집중" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
