import React, { useState, memo } from "react";
//import { useInputValue, useTodos } from "./custom-hooks";
import styled from 'styled-components'
import Header from "./components/Header";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background: #34495e;
  color: white;
  width:500px;
`
const App = memo(props => {
  const [inputValue, setInputValue] = useState('');
  const changeInput = event => setInputValue(event.target.value);
  const clearInput= () => setInputValue("")
  const keyInput= (event, callback) => {
    if (event.which === 13 || event.keyCode === 13) {
      callback(inputValue);
      return true;
    }
    return false;
  }
  //const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  //const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    if (text !== "") {
      setTodos(
        todos.concat({
          text,
          checked: false
        })
      );
    }
  }
  const checkTodo = idx => {
    setTodos(
      todos.map((todo, index) => {
        if (idx === index) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  }
  const removeTodo= idx => {
      setTodos(todos.filter((todo, index) => idx !== index));
    }
  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Wrapper>
      <Header></Header>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList items={todos} onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}/>
      </Wrapper>
  );
});

export default App;
