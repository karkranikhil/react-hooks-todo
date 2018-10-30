import React, { memo } from "react";
import styled from 'styled-components'
export const AddInputWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 100%;
    height: 30px;
    font-size: 20px;
`
export const AddInput= styled.input`
    height: 30px;
    font-size: 20px;
`
export const Button = styled.button`
    font-size: 26px;
    cursor: pointer;
`

const AddTodo = memo(props => (
<AddInputWrapper>
    <AddInput type="text"
    placeholder="Add Todo here"
    value={props.inputValue}
    onChange={props.onInputChange}
    onKeyPress={props.onInputKeyPress}
    />
    <Button onClick={props.onButtonClick}>+</Button>
</AddInputWrapper>
));

export default AddTodo;
