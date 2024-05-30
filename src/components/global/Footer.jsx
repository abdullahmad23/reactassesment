import React from 'react'
import styled from 'styled-components'
import Img from "../../assests/logo blanco 1.png"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MainContainer = styled.section`
background-color:#303137;
position:relative;
margin-top:5%;
`
const Line= styled.section`
position:absolute;
top:40px;
width:95%;
height:1px;
background-color:white;
opacity:50%;
`
const LogoContainer = styled.section`
display:flex;
padding:5% 4% 0 4%;
justify-content:end;
@media (max-width: 500px) {
    width:90%;
    padding:15% 4% 0 4%;
   }
`
const Wrapper = styled.section`
display:flex;
align-items:center;
flex-wrap:wrap;
padding:0 10%;
@media (max-width: 500px) {
   flex-direction:column;
  }
`
const DetailCard = styled.section`
flex:1;
height:100%;
@media (max-width: 700px) {
    width:100%;
  }
`
const H3 = styled.h3`
border-bottom:2px solid white;
width:60%;
color:white;
`
const Span = styled.span`
display:flex;
align-items:center;
justify-content:start;
`
const H4 = styled.h4`
margin:0;
color:white;
font-weight:500;
`
const H5 = styled.h5`
margin:0;
color:white;
font-weight:100;
`
const ImageContainer = styled.section`
flex:1;
@media (max-width: 700px) {
    width:100%;
    display:flex;
    justify-content:center;
  }
`
const Image = styled.img`
width:300px;
height:300px;
object-fit:contain;
`
const H2 = styled.h2`
margin:0;
font-size:20px;
font-weight:100;
text-align:center;
padding-bottom:10px;
color:white;
opacity:50%;
`
const Footer = () => {
    return (
        <>
            <MainContainer>
                <Line/>
                <LogoContainer>
                    <FacebookOutlinedIcon style={{color:'white'}}/>
                    <InstagramIcon style={{color:'white'}}/>
                    <WhatsAppIcon style={{color:'white'}}/>
                </LogoContainer>
                <Wrapper>
                    <DetailCard>
                        <H3>Contact Details</H3>
                        <Span>
                            <H4>Tel: </H4>
                            <H5> +(504) 2276-0010</H5>
                        </Span>
                        <Span>
                            <H4>Mov: </H4>
                            <H5> +(504) 2276-0010</H5>
                        </Span>
                        <Span>
                            <H4>E-mail: </H4>
                            <H5> infocargo@cargo.com</H5>
                        </Span>

                    </DetailCard>

                    <DetailCard>
                        <H3>Menu</H3>
                            <H4>Home</H4>
                            <H4>Marketplace</H4>
                            <H4>About us</H4>
                            <H4>Contacts</H4>
                    </DetailCard>

                    <ImageContainer>
                        <Image src={Img}/>
                    </ImageContainer>
                </Wrapper>
                <H2>by AndresMeza</H2>
            </MainContainer>
        </>
    )
}

export default Footer
