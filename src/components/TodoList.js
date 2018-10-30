import React, { memo } from "react";
import TodoListItem from "./TodoListItem";
import styled from 'styled-components'
export const TodoListWrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 2rem;
margin-top: 25px;
`
const TodoList = memo(props => (
  <>
    {props.items.length > 0 && (
        <div>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              id={idx}
              key={`TodoItem.${idx}`}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
          </div>
    )}
  </>
));

export default TodoList;
