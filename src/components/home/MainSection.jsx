import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';


const MainContainer = styled.section`
display:flex;
flex-direction:column;
padding:0 15%;
align-items:center;
margin-bottom:7%;
`
const H1 = styled.h1`
font-size:60px;
font-weight:400;
margin:0; 
text-align:center;
background: linear-gradient(to left,#3F60B6,#6D5FC1,#76B6DA,#ECC444);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
font-family: "Titan One", sans-serif;
z-index:1;
`
const Para = styled.p`
font-size:20px;
font-weight:400;
text-align:center;
padding:0 14%;
`
const ButtonWrapper = styled.section`
width:25%;
display:flex;
justify-content:space-between;
align-item:center;
background-image: linear-gradient(to left,#76B6DA,#947E9C,#5243D6);
padding:5px;
border-radius:50px;
`
const Input = styled.input`
background:transparent;
border:none;
color:white;
&::placeholder{
    color:white;
    font-weight:bold;
}
`
const CartIcon = styled.aside`
background-color:white;
width:40px;
height:40px;
border-radius:20px;
display:flex;
align-items:center;
justify-content:center;
`
const Anchor = styled.a`
text-decoration:none;

`
const MainSection = () => {
    return (
        <>
            <MainContainer>
                <H1>That neither Distance nor time separate you from your people.</H1>
                <Para>You can now buy your 100% Honduran products with us and we will send them to the door of your house anywhere in the United States.</Para>

                <ButtonWrapper>
                    <Input placeholder='Explore Marketplace'/>
                    <Anchor as={NavLink} to="/">
                    <CartIcon>
                        <ShoppingCartOutlinedIcon style={{color:"#ECC444"}}/>
                    </CartIcon>
                    </Anchor>
                </ButtonWrapper>
            </MainContainer>
        </>
    )
}

export default MainSection
