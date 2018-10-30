import React, { memo } from "react";
import styled from 'styled-components'
export const HeaderDiv = styled.h1`
    text-align: center;
`

const Header = memo(props => (
    <HeaderDiv>TODO APP</HeaderDiv>
));

export default Header;
