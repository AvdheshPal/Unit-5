import styled from "styled-components";
export const Div = styled.button`
background-color: ${(props) =>(props.theme === "lite" ? "coral" : "orange")};
color: aliceblue;
height: 50px;
width: 200px;
border: 1px solid gray;
`