import React from 'react'
import styled from 'styled-components'
import imgbox from "../../assests/logo2 copy 3.png"


const MainContainer = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
padding:3% 10%;
flex-wrap:wrap;
`
const LeftContainer = styled.section`
flex:2;
min-width:300px;
`
const H1 =styled.h1`
margin:0;
font-size:60px;
font-weight:400;
background:${props=>props.background};
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
text-align:${props=>props.textalign};
font-family: "Titan One", sans-serif;
@media (max-width: 500px) {
  font-size:50px;
}
`
const Para = styled.p`
padding-right:20%;
font-size:20px;
font-weight:400;
`
const RightContainer = styled.section`
flex:1;
display:flex;
justify-content:center;
align-items:center;
`
const Image = styled.img`
width:300px;
height:300px;
`
const AboutSection = () => {
  return (
    <>
      <MainContainer>
        <LeftContainer>
            <H1 background="linear-gradient(to left,#3F60B6,#6D5FC1,#76B6DA,#ECC444)" textalign="start">¿What is</H1>
            <H1 background="black" textalign="center">AltoCargo?</H1>
            <Para>We are a Honduran company that aims to make Honduran products available to our compatriots in the United States. You buy them, we pack them and send them to your doorstep. to anywhere in the United States.</Para>
        </LeftContainer>
        <RightContainer>
            <Image src={imgbox}/>
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default AboutSection
