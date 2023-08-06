import React from 'react'
import MyButton from './MyButton'
import styled from 'styled-components' //Version installed: "^5.3.10"


  const DIV = styled.div`
  //This position div at the middle of page regardless of screen size and resolution
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `


export default function App() {
    const handleClick = () =>{
        alert("You Clicked")
    }
    
  return (
    <>
        <DIV>
            <MyButton 
                onClick={handleClick}
                name="Click Me"
            />
        </DIV>
    </>
  )
}
