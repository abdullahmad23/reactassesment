import React from 'react'
import styled from 'styled-components'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'
import { NavLink } from 'react-router-dom'

const MainContainer = styled.section`
background-color:#F8F8F8;
position:relative;
z-index:1;
`

const Bubble = styled.section`
width:${props => props.width};
height:${props => props.height};
border-radius:50%;
background-image:${props => props.background};
position:absolute;
top:${props => props.top};
left:${props => props.left};
filter: blur(1px);
-webkit-filter: blur(1px);
z-index:${props => props.zindex};
`
const BubbleWhite = styled.section`
width:${props => props.width};
height:${props => props.height};
border-radius:50%;
position:absolute;
top:${props => props.top};
left:${props => props.left};
background-color:white;
z-index:-1;
`


const SubContainer = styled.section`
display:flex;
background:transperent;
flex-wrap:wrap;
`
const LeftContainer = styled.section`
flex:2;
min-width:500px;
`
const H1 = styled.h1`
color:#1B3055;
font-size:60px;
padding:10% 15%;
font-family: "Lexend", sans-serif;
`
const RightContainer = styled.section`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
min-width:250px;
@media (max-width: 766px) {
    width:100%;
    justify-content:center;
    align-items:center;
}
`
const Label = styled.label`
width:80%;
margin:10px 0;
color:#898989;
`
const Input = styled.input`
width:80%;
padding:10px 5px;
border:1px solid #D9D9D9;
`
const Btn = styled.button`
width:81%;
margin-top:5%;
padding:10px;
background-color:#EDC74C;
border:none;
color:white;
`
const Para = styled.p`
font-weight:300;
font-size:15px;
color:#CCCCCC;
`
const Anchor = styled.a`
`

const Login = () => {
    return (
        <>
            <MainContainer>
            <Bubble zindex="-1" background="radial-gradient(#F4DB8A, #ECC444, #B08F23)" height="107px" width="107px" top="50%" left="20%" />
            <Bubble zindex="-1" background="radial-gradient(#9186D7, #6D5FC1, #5A4EA8)" height="71px" width="71px" top="-3%" left="55%" />
            <Bubble zindex="-1" background="radial-gradient(#8DC6E7, #76B6DA, #5187A6)" height="54px" width="54px" top="15%" left="1%" />
            <BubbleWhite height="266px" width="266px" top="-3%" left="18%" />

                <Navbar />
                <SubContainer>
                    <LeftContainer>
                        <H1>Enter the requested data to enter your cargo account</H1>
                    </LeftContainer>
                    <RightContainer>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' type='email' placeholder='Enter your email'/>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' type='password' placeholder='Password'/>
                        <Btn>Login</Btn>
                        <Para>When you click "Submit" you agree to our <Anchor as={NavLink}>Privacy Terms</Anchor></Para>
                    </RightContainer>
                </SubContainer>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Login
