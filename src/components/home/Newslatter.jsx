import React from 'react'
import styled from 'styled-components'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import bg from "../../assests/8894 1.png"

const MainContainer = styled.section`
display:flex;
justify-content:space-around;
align-items;center;
margin:5% 5%;
background-color:#3D447A;
border-radius:20px;
`
const LeftContainer =styled.section`
display:flex;
align-items:center;
justify-content:center;
flex:1;
`
const Image = styled.img`
width:400px;
height:400px;
object-fit:contain;
`
const RightContainer = styled.section`
padding:0 10%;
flex:1;
`
const H1 = styled.h1`
font-size:30px;
font-weight:500;
color:white;
font-family: "Titan One", sans-serif;
margin-bottom:25%;
` 
const Para = styled.p`
font-family: "Tiro Gurmukhi", serif;
color:white;
font-weight:300;
`
const ButtonContainer = styled.section`
display:flex;
justify-content:space-around;
align-items:center;
width:50%;
background-image:linear-gradient(to right, #76B6DA,#947E9C,#8D86CF);
border-radius:20px;
`
const Input = styled.input`
background:transparent;
border:none;
padding:20px;
&::placeholder{
    color:white;
    font-size:20px;
    font-weight:bold;
}
`
const Newslatter = () => {
  return (
    <>
      <MainContainer>
        <LeftContainer>
            <Image src={bg}/>
        </LeftContainer>

        <RightContainer>
            <H1>Do you want to be part of AltoCargo?</H1>
            <Para>By enrolling you will be part of the Cargo family, you are ready</Para>
            <ButtonContainer>
                <Input placeholder='Start here...'/>
                <ArrowForwardOutlinedIcon style={{color:"white"}}/>
            </ButtonContainer>
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default Newslatter
