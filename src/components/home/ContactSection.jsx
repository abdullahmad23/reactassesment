import React from 'react'
import styled from 'styled-components'
import PublicIcon from '@mui/icons-material/Public';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';

const MainContainer = styled.section`
display:flex;
justify-content:space-around;
align-items;center;
padding:5% 10%;
gap:5%;
`
const Cards = styled.section`
width:300px;
height:200px;
background:${props => props.bg};
padding:20px;
`
const LogoContainer = styled.section`
display:flex;
justify-content:space-between;
align-items;center;

`
const H1 = styled.h1`
font-size:30px;
font-weight:600;
font-family: "Lexend", sans-serif;

`
const Para = styled.p`
font-size:15px;
font-weight:400;
font-family: "Lexend", sans-serif;
`
const ContactSection = () => {
    return (
        <>
            <MainContainer>
                <Cards bg="white">
                    <LogoContainer>
                        <PublicIcon style={{ fontSize: "50px", fontWeight: "100", color:"#F6BE2C"}} />
                        <MoreVertIcon style={{ fontSize: "50px", fontWeight: "100" }} />
                    </LogoContainer>
                    <H1>Globalization</H1>
                    <Para style={{color:"#8A8B8E"}}>With charge you can order from the comfort of your home</Para>
                </Cards>

                <Cards bg="linear-gradient(180deg, #4CB3ED, #7DBBDE);">
                    <LogoContainer>
                        <PhoneForwardedOutlinedIcon style={{ fontSize: "50px", fontWeight: "100", color:"white" }} />
                        <MoreVertIcon style={{ fontSize: "50px", fontWeight: "100" }} />
                    </LogoContainer>
                    <H1 style={{ color: "white" }}>Redsposibility</H1>
                    <Para style={{color:"white"}}>We are leaders in communication, if you have any questions</Para>
                </Cards>

                <Cards bg="white">
                    <LogoContainer>
                        <PublicIcon style={{ fontSize: "50px", fontWeight: "100", color:"#F6BE2C" }} />
                        <MoreVertIcon style={{ fontSize: "50px", fontWeight: "100" }} />
                    </LogoContainer>
                    <H1 >Trust</H1>
                    <Para style={{color:"#8A8B8E"}}>Have confidence in our products 100% Hondureños</Para>
                </Cards>
            </MainContainer>
        </>
    )
}

export default ContactSection
