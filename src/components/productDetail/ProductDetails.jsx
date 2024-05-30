import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';


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
background-color:white;
z-index:-1;
`

const MainContainer = styled.section`
position:relative;
z-index:1;
background:#F8F8F8;
overflow-y:hidden;
`
const Para = styled.p`
font-size:${props => props.fontsize};
font-weight:${props => props.fontweight};
color:${props => props.color};
margin-left:${props=>props.marginleft};
@media (max-width: 758px) {
    margin-left:0%;
}
`
const SubContainer = styled.section`
padding:1% 5%;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
`
const LeftContainer = styled.section`
flex:1;
`
const Image = styled.img`
width:100%;
height:500px;
object-fit:cover;
border-radius:20px;
@media (max-width: 600px) {
height:400px;
}
@media (max-width: 500px) {
    height:350px;
}
@media (max-width: 400px) {
    height:300px;
}
`
const Gallery = styled.section`
height:30%
width:100%;
display:flex;
`
const ImageBtn = styled.button`
flex:1;
margin:2%;
width:100px;
height:130px;
background:transparent;
border:none;
border-radius:20px;
overflow:hidden;
`
const GalleryImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const RightContainer = styled.section`
flex:1;
`

const H1 = styled.h1`
font-size:50px;
margin:0;
padding-left:10%;
@media (max-width: 758px) {
    padding-left:0%;
}
@media (max-width: 600px) {
    font-size:40px;
}
@media (max-width: 400px) {
    font-size:30px;
}
`
const StarsContainer = styled.section`
display:flex;
padding-left:10%;
@media (max-width: 758px) {
    padding-left:0%;
}
`
const PriceContainer = styled.section`
display:flex;
align-items:center;
padding-left:10%;
@media (max-width: 758px) {
    padding-left:0%;
}
`
const Price = styled.h2`
margin:0;
flex:1;
font-size:30px;
`
const Discount = styled.h2`
margin:0;
flex:2;
margin-left:30px;
`
const LogoContainer = styled.section`
margin-left:10%;
display:flex;
gap:30px;
border-top:1px solid black;
border-bottom:1px solid black;
padding:3% 0;
@media (max-width: 758px) {
    margin-left:0%;
}
`
const Logo = styled.section`
display:flex;
flex-direction:column;
align-items:center;
border:1px solid black;
padding:7px 20px;
border-radius:10px;
`
const LogoText = styled.text`
`
const ActionContainer = styled.section`
margin-left:10%;
display:flex;
gap:30px;
margin-top:5%;
margin-bottom:20%;
@media (max-width: 758px) {
    margin-left:0%;
}
`
const QuantityBtn = styled.button`
display:flex;
flex-direction:column;
padding:5px 10px;
border-radius:10px;
border:1px solid black;
`
const Quantity = styled.select`
background:transparent;
border:none;
font-size:25px;
font-weight:700;
`
const Option = styled.option`
border:none;
`
const CartBtn = styled.button`
background:#37383E;
color:white;
font-size:15px;
font-weight:500;
padding:1% 7%;
border-radius:10px;
`

const ProductDetails = () => {
    const location = useLocation();
    const item = location.state?.item;
    const [url, setUrl] = useState(item.image);
    
    return (
        <>
            <MainContainer>
                <Bubble zindex="-1" background="radial-gradient(#F4DB8A, #ECC444, #B08F23)" height="107px" width="107px" top="55%" left="85%" />
                <BubbleWhite height="266px" width="266px" top="2%" left="40%" />
                <Bubble zindex="-1" background="radial-gradient(#9186D7, #6D5FC1, #5A4EA8)" height="112px" width="112px" top="-2%" left="54%" />

                <Navbar />
                <Para style={{ paddingLeft: "5%" }}>marketplace / buy / {item.category}</Para>
                <SubContainer>
                    <LeftContainer>
                        <Image src={url} />
                        <Gallery>
                            <ImageBtn onClick={() => setUrl(item.image)}>
                                <GalleryImage src={item.image}  alt='Loading...'/>
                            </ImageBtn>
                            <ImageBtn onClick={() => setUrl(item.image2)}>
                                <GalleryImage src={item.image2}  alt='Loading...'/>
                            </ImageBtn>
                            <ImageBtn onClick={() => setUrl(item.image3)}>
                                <GalleryImage src={item.image3}  alt='Loading...'/>
                            </ImageBtn>
                        </Gallery>
                    </LeftContainer>

                    <RightContainer>
                        <H1>{item.title}</H1>
                        <Para style={{ paddingLeft: '10%', color: "#AEB0BC", display: 'flex', alignItems: "center" }}>By <Para style={{ color: "#5A4EA8", margin: "5px" }}> Rosquillas buen mar</Para></Para>

                        <StarsContainer>
                            <StarBorderOutlinedIcon style={{ color: "#F6BE2C" }} />
                            <StarBorderOutlinedIcon style={{ color: "#F6BE2C" }} />
                            <StarBorderOutlinedIcon style={{ color: "#F6BE2C" }} />
                            <StarBorderOutlinedIcon style={{ color: "#F6BE2C" }} />
                            <StarBorderOutlinedIcon style={{ color: "#F6BE2C" }} />
                        </StarsContainer>

                        <PriceContainer>
                            <Price style={{ borderRadius: "10px", color: "#5A4EA8", backgroundColor: "#EEEBFF", maxWidth: "150px", padding: "20px", margin: "20px 0", textAlign: "center" }}>$ {item.price}</Price>
                            <Discount>
                                <Price style={{ color: "#89BFA5" }}>Save 12%</Price>
                                <Para fontsize="12px" fontweight="400">Includes all taxes</Para>
                            </Discount>
                        </PriceContainer>
                        <Para fontsize="15px" fontweight="400" marginleft= "10%">{item.description}</Para>

                        <LogoContainer>
                            <Logo>
                                <DeviceThermostatOutlinedIcon style={{ color: "#545F71" }} />
                                <LogoText>hot</LogoText>
                            </Logo>
                            <Logo>
                                <CalendarMonthIcon style={{ color: "#545F71" }} />
                                <LogoText>fast</LogoText>
                            </Logo>
                            <Logo>
                                < ScaleOutlinedIcon style={{ color: "#545F71" }} />
                                <LogoText>2.2lb</LogoText>
                            </Logo>
                            <Logo>
                                <ContentCopyOutlinedIcon style={{ color: "#545F71" }} />
                                <LogoText>uni</LogoText>
                            </Logo>
                        </LogoContainer>

                        <ActionContainer>
                            <QuantityBtn>
                                Uni
                                <Quantity>
                                    <Option>1</Option>
                                    <Option>2</Option>
                                    <Option>3</Option>
                                    <Option>4</Option>
                                </Quantity>
                            </QuantityBtn>
                            <CartBtn>Add to Cart</CartBtn>
                        </ActionContainer>
                    </RightContainer>
                </SubContainer>
                <Footer />
            </MainContainer>
        </>
    )
}

export default ProductDetails
