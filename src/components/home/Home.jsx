import React from 'react'
import Navbar from '../global/Navbar'
import styled from 'styled-components'
import MainSection from './MainSection'
import ProductsSection from './ProductsSection'
import AboutSection from './AboutSection'

const MainContainer = styled.section`
background-color:#F8F8F8;
z-index:1;
position:relative;
overflow:hidden;
`
const Bubble = styled.section`
width:${props => props.width};
height:${props => props.height};
border-radius:50%;
background-image:${props => props.background};
position:absolute;
top:${props => props.top};
left:${props => props.left};
filter: blur(2px);
-webkit-filter: blur(2px);
z-index:${props => props.zindex};
`
const BubbleWhite = styled.section`
width:${props => props.width};
height:${props => props.height};
border-radius:50%;
position:absolute;
top:${props => props.top};
left:${props => props.left};
opacity:41%;
background-color:white;
z-index:-2;
`

const Home = () => {
  return (
    <div>
      <MainContainer>
        <Bubble zindex="1" background="radial-gradient(#F4DB8A, #ECC444, #B08F23)" height="107px" width="107px" top="22%" left="89%" />
        <Bubble zindex="-1" background="radial-gradient(#F4DB8A, #ECC444, #B08F23)" height="107px" width="107px" top="30%" left="18%" />
        <Bubble zindex="-1" background="radial-gradient(#9186D7, #6D5FC1, #5A4EA8)" height="112px" width="112px" top="-2%" left="71%" />
        <Bubble zindex="1" background="radial-gradient(#9186D7, #6D5FC1, #5A4EA8)" height="71px" width="71px" top="29%" left="86%" />
        <Bubble zindex="1" background="radial-gradient(#8DC6E7, #76B6DA, #5187A6)" height="54px" width="54px" top="15%" left="3%" />

        <BubbleWhite height="509px" width="509px" top="13%" left="10%" />
        <BubbleWhite height="358px" width="358px" top="19%" left="13%" />
        <BubbleWhite height="266px" width="266px" top="23%" left="15%" />
        <BubbleWhite height="266px" width="266px" top="2%" left="54%" />


        <BubbleWhite height="509px" width="509px" top="66%" left="60%" />
        <Bubble zindex="1" background="radial-gradient(#8DC6E7, #76B6DA, #5187A6)" height="100px" width="100px" top="76%" left="56%" />
        <Bubble zindex="1" background="radial-gradient(#9186D7, #6D5FC1, #5A4EA8)" height="40px" width="40px" top="100%" left="85%" />
        <Bubble zindex="-1" background="radial-gradient(#F4DB8A, #ECC444, #B08F23)" height="107px" width="107px" top="93%" left="88%" />

        <BubbleWhite height="509px" width="509px" top="72%" left="2%" />
        <Bubble zindex="1" background="radial-gradient(#8DC6E7, #76B6DA, #5187A6)" height="63px" width="63px" top="95%" left="5%" />

        <Navbar />
        <MainSection />
        <ProductsSection />
        <AboutSection />
      </MainContainer>
    </div>
  )
}

export default Home
