import React, { memo } from "react";
import styled from 'styled-components'
export const Checkbox = styled.span`
    position: relative;
    & label{
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 40px;
        left: 0;
        position: absolute;
        top: -11px;
        width: 40px;
        &:after{
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 14px;
            opacity: 0;
            position: absolute;
            top: 14px;
            transform: rotate(-45deg);
            width: 12px;
        }
    }
    > input[type="checkbox"] {
        visibility: hidden;
    }
    > input[type="checkbox"]:checked + label {
        background-color: #66bb6a;
        border-color: #66bb6a;
    }
    > input[type="checkbox"]:checked + label:after {
        opacity: 1;
      }
`
export const Table = styled.table` 
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
    margin-top: 20px;
`

export const Th = styled.th`  
    text-align:${props=>props.Third?'right':'left'};
    padding: 16px;
`
export const Td = styled.td`  
    text-align:${props=>props.Third?'right':'left'};
    padding-left: ${props=>props.first?'20px;':''};
    font-size: ${props=>props.second?'30px':''};
    width:${props=>props.first?'20%;':props.second?'70%;':props.Third?'10%;':''}
`
export const Tr = styled.tr`  
    height:50px;
    line-height:50px;
    background: #2d3e50;
    color: #1abb9b;
`
export const Button = styled.button`  
    background-color: red;
    border: none;
    color: white;
    padding: 20px 25px; 
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: white;
        border:1px solid red;
        color: red;
    }
`
const TodoListItem = memo(props => (
<Table>
    <tbody>
  <Tr>
    <Td first>
        <Checkbox>
            <input type="checkbox" id={`checkbox.${props.id}`} onClick={props.onCheckBoxToggle} defaultChecked={props.checked} />
            <label htmlFor={`checkbox.${props.id}`}></label>
        </Checkbox>
     </Td>
    <Td second>{props.text}</Td>
    <Td Third><Button onClick={props.onButtonClick}><i className="fa fa-trash"></i></Button></Td>
  </Tr>
  </tbody>
</Table>
));

export default TodoListItem;
