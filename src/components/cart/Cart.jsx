import React from 'react'
import styled from 'styled-components'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'
import Img from "../../assests/Rosquillas-olanchanas-1.png"
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MasterCard from "../../assests/MasterCard_Logo.png"
import VisaCard from "../../assests/g4158.png"
import Plus from "../../assests/plus.png"

const MainContainer = styled.section`
background-color:#F8F8F8;
`
const SubContainer = styled.section` 
display:flex;
flex-wrap:wrap;
padding:0 5%;
@media (max-width: 1200px) {
    padding: 0 1%;
  }
`
const LeftContainer = styled.section`
flex:1.5;
@media (max-width: 1200px) {
    width:100%;
  }
`
const H1 = styled.h1`
margin:0;
font-size:${props => props.fontsize};
color:${props => props.color};

`
const Para = styled.p`
font-weight:400;
`
const Card = styled.section`
background:#F1F1F1;
padding:20px;
margin-left:30px;
@media (max-width: 500px) {
    margin-left:0;
  }
`
const CardInner = styled.section`
display:flex;
margin-bottom:10px;
background:#FFFFFF;
border-radius:15px;
overflow:hidden;
padding-left:10px;
@media (max-width: 500px) {
    max-height:150px;
  }
`
const Image = styled.img`
flex:1;
width:${props => props.width};
height:${props => props.height};
object-fit:cover;
margin:auto;
border-radius:10px;
`
const Detail = styled.section`
flex:3;
padding:10px;
@media (max-width: 700px) {
    flex:1;
    overflow-y:scroll;
    scrollbar-width:none;
  }
`
const Quantity = styled.section`
width:15%;
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
`
const Price = styled.section`
flex:0.5;
font-weight:bold;
font-size:20px;
`
const DeleteBtn = styled.button`
flex:0.4;
background:#303137;
color:white;
`

// payment section starts here
const RightContainer = styled.section`
background:#535AAB;
margin:0 6%;
padding:2%;
border-radius:15px;
max-height:610px;
@media (max-width: 1200px) {
    flex-direction: column;
    width:100%;
  }
`
const LogoContainer = styled.section`
display:flex;
gap:20px;
`
const Logo = styled.image`
border:1px solid white;
border-radius:10px;
padding:5px 10px;
display:flex;
align-items:center;
justify-content:center;
`
const Label = styled.label`
width:100%;
display:block;
margin:10px 0;
color:white;
`
const Input = styled.input`
width:100%;
display:block;
padding:10px 5px;
border:none;
background:#5E66B8;
color:white;
&::placeholder{
    color:white;
};
@media (max-width: 700px) {
    width:98%;
  }
`
const ExpContainer = styled.section`
display:flex;
`
const ExpInner = styled.section`
flex:1;
margin:10px;
`
const SubTotalContainer = styled.section`
padding:3% 0;
border-top:1px solid white;
border-bottom:1px solid white;
`
const SubTotalContainerInner = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const ShippmentContainer = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const Btn = styled.button`
border:none;
border-radius:10px;
background:#74D6BB;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Cart = () => {
    return (
        <>
            <MainContainer>

                <Navbar />

                <Para style={{ marginLeft: "3%" }}>marketplace / buy / Rosquillas</Para>

                <SubContainer>

                    <LeftContainer>
                        <H1 fontsize="35px" >Order List</H1>
                        <Para>Review the order with all the products, you can add or attach more. as well as verify payment thereof</Para>
                        <Card>

                            <CardInner>
                                <Image width="150px" height="120px" src={Img} />
                                <Detail>
                                    <H1 fontsize="20px">Hat shaped keychain</H1>
                                    <Para>This is an artisanal keychain, handmade by people who work with leather, special for your keys.</Para>
                                    <Quantity>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                                        1
                                        <ControlPointOutlinedIcon style={{ fontSize: "20px" }} />
                                    </Quantity>
                                </Detail>
                                <Price>$ 12.8</Price>
                                <DeleteBtn><DeleteOutlinedIcon /></DeleteBtn>
                            </CardInner>

                            <CardInner>
                                <Image width="150px" height="120px" src={Img} />
                                <Detail>
                                    <H1 fontsize="20px">Hat shaped keychain</H1>
                                    <Para>This is an artisanal keychain, handmade by people who work with leather, special for your keys.</Para>
                                    <Quantity>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                                        1
                                        <ControlPointOutlinedIcon style={{ fontSize: "20px" }} />
                                    </Quantity>
                                </Detail>
                                <Price>$ 12.8</Price>
                                <DeleteBtn><DeleteOutlinedIcon /></DeleteBtn>
                            </CardInner>

                            <CardInner>
                                <Image width="150px" height="120px" src={Img} />
                                <Detail>
                                    <H1 fontsize="20px">Hat shaped keychain</H1>
                                    <Para>This is an artisanal keychain, handmade by people who work with leather, special for your keys.</Para>
                                    <Quantity>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                                        1
                                        <ControlPointOutlinedIcon style={{ fontSize: "20px" }} />
                                    </Quantity>
                                </Detail>
                                <Price>$ 12.8</Price>
                                <DeleteBtn><DeleteOutlinedIcon /></DeleteBtn>
                            </CardInner>
                            
                        </Card>
                    </LeftContainer>

                    <RightContainer>

                        <H1 fontsize="30px" color="white">My Order</H1>
                        <Para style={{ color: "white" }}>Type Card</Para>

                        <LogoContainer>
                            <Logo>
                                <Image src={MasterCard} />
                            </Logo>
                            <Logo>
                                <Image src={VisaCard} />
                            </Logo>
                            <Logo>
                                <Image src={MasterCard} />
                            </Logo>
                            <Logo>
                                <Image src={Plus} />
                            </Logo>
                        </LogoContainer>
                        <Label htmlFor='name'>Name</Label>
                        <Input type='text' id='name' placeholder='Enter your full name' />

                        <Label htmlFor='card'>Credit Card Number</Label>
                        <Input type='number' id='card' placeholder='Credit card number' />

                        <ExpContainer>

                            <ExpInner>
                                <Label htmlFor='exp'>Experation</Label>
                                <Input id='exp' type='date' />
                            </ExpInner>

                            <ExpInner>
                                <Label htmlFor='cvv'>CVV</Label>
                                <Input id='cvv' type='number' />
                            </ExpInner>

                        </ExpContainer>

                        <SubTotalContainer>

                            <SubTotalContainerInner>
                                <H1 fontsize="15px" color="white">Subtotal</H1>
                                <Para style={{ color: "white" }}>$ 54.20</Para>
                            </SubTotalContainerInner>

                            <SubTotalContainerInner>
                                <H1 fontsize="15px" color="white">Save -10%</H1>
                                <Para style={{ color: "white" }}>$ 48.80</Para>
                            </SubTotalContainerInner>

                        </SubTotalContainer>
                        
                        <ShippmentContainer>
                            <H1 fontsize="15px" color="white">Shipment</H1>
                            <Para style={{ color: "white" }}>$ 50.80</Para>
                        </ShippmentContainer>

                        <Btn>
                        <H1 fontsize="15px" color="white">$99.06</H1>
                            <Para style={{ color: "white" }}>Buy</Para>
                        </Btn>
                    </RightContainer>

                </SubContainer>

                <Footer />
            </MainContainer>
        </>
    )
}

export default Cart
