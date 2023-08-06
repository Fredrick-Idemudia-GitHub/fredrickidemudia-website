import React from 'react'
import styled from 'styled-components' //Version installed: "^5.3.10"


const BUTTON = styled.button`
    background-color:black;
    color: hotpink;
    font-weight:600;
    border-radius:10px;
    border:none;
    width:150px;
    height:50px
    transition:background-color 0.3s ease; // Adding a smooth transition for the hover effect

    &:hover {
      background-color: #0056b3;
    }
  `
  
  
export default function MyButton({name,onClick}) {
  return (
    <div>
        <BUTTON onClick={onClick}>
            {name}
        </BUTTON>
    </div>
  )
}
