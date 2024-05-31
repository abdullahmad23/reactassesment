import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

// main container and all child component css
const MainContainer = styled.section`
display:${props => props.display};
align-items:center;
background:transparent;
@media (max-width: 1200px) {
    flex-direction:${props => props.fd};
    gap:10px;
    position:${props => props.position};
    right:0;
    top:${props => props.top};
    background-color:${props => props.bg};
    z-index:3;
    width:${props => props.width};
    height:${props => props.height};
   }
   @media (min-width: 1201px) {
    display:${props => props.dis};
   }
`

// logo container and all child component css
const LogoContainer = styled.section`
flex:1;
@media (max-width: 700px) {
    flex:0;
    img{
        width:350px;
        height:100%;
    }
}
@media (max-width: 600px) {
    flex:0;
    img{
        width:300px;
        height:100%;
    }
}
@media (max-width: 500px) {
    flex:0;
    img{
        width:200px;
        height:100%;
    }
}
@media (max-width: 450px) {
    flex:0;
    img{
        width:150px;
        height:100%;
    }
}
@media (max-width: 400px) {
    flex:0;
    img{
        width:100px;
        height:100%;
    }
}
`

// links container and all child component css
const LinksContainer = styled.section`
flex:2;
@media (max-width: 1200px) {
    display:${props => props.display};
    width:100%;
    flex:0;
   }
`
const Ul = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
@media (max-width: 1200px) {
 flex-direction:column;
 flex:0;
 align-items:flex-start;
}
`
const Li = styled.li`
list-style:none;
margin:10px;
color:black;
`

// search container and all child component css
const SearchContainer = styled.section`
flex:1.5;
display:flex;
justify-content:space-around;
@media (max-width: 700px) {
flex:0;
   }
`
const SearchContainerWrapper = styled.section`
display:flex;
align-items:center;
border:1px solid black;
border-radius:20px;
padding:5px 10px;
background-color:white;
`
const SearchBar = styled.input`
border:none;
`
const LanguageButton = styled.button`
display:flex;
align-items:center;
border:1px solid black;
border-radius:20px;
padding:5px 10px;
background-color:white;
@media (max-width: 1200px) {
    display:${props => props.display};

   }
`
const Menu = styled.button`
display:none;
@media (max-width: 1200px) {
    display:block;
    z-index:4;
`
// action container and all child component css
const ActionContainer = styled.section`
flex:1;
display:flex;
align-items:center;
justify-content:space-around;
@media (max-width: 1200px) {
    display:${props => props.display};
    width:100%;
   }
`
const Anchor = styled.a`
text-decoration:none;

`
const Navbar = () => {
    const [show, setShow] = useState("none")
    return (
        <>
            <MainContainer dis="none" display={show} fd="column" position="absolute" width="70%" height="50vh" bg="#839fc1" top="0%">
                <LinksContainer>
                    <Ul>
                        <Anchor as={NavLink} to="/">
                            <Li>home</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>marketplace</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>about us</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>contact us</Li>
                        </Anchor>
                    </Ul>
                </LinksContainer>
                <ActionContainer>
                    <Anchor as={NavLink} to="/cart">
                        <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                    </Anchor>
                    <Anchor as={NavLink} to="/productDetail">
                        <NotificationsOutlinedIcon style={{ color: "black" }} />
                    </Anchor>
                    <Anchor as={NavLink} to="/login">
                        <PermIdentityIcon style={{ color: "black" }} />
                    </Anchor>
                    <LanguageButton>
                        <TranslateIcon />
                        ES
                    </LanguageButton>
                </ActionContainer>
            </MainContainer>


            <MainContainer display="flex">
                <LogoContainer>
                    <img src={logo} alt="" width="323px" height="106px" />
                </LogoContainer>

                <LinksContainer display="none">
                    <Ul>
                        <Anchor as={NavLink} to="/">
                            <Li>home</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>marketplace</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>about us</Li>
                        </Anchor>
                        <Anchor as={NavLink} to="/">
                            <Li>contact us</Li>
                        </Anchor>
                    </Ul>
                </LinksContainer>

                <SearchContainer>
                    <SearchContainerWrapper>
                        <SearchBar type='text' placeholder='Search Here' />
                        <SearchIcon />
                    </SearchContainerWrapper>
                    <LanguageButton display="none">
                        <TranslateIcon />
                        ES
                    </LanguageButton>
                </SearchContainer>
                <Menu onClick={() => show == "none" ? setShow("block") : setShow("none")}>
                    <MenuIcon />
                </Menu>

                <ActionContainer display="none">
                    <Anchor as={NavLink} to="/cart">
                        <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                    </Anchor>
                    <Anchor as={NavLink} to="/productDetail">
                        <NotificationsOutlinedIcon style={{ color: "black" }} />
                    </Anchor>
                    <Anchor as={NavLink} to="/login">
                        <PermIdentityIcon style={{ color: "black" }} />
                    </Anchor>
                </ActionContainer>
            </MainContainer>
        </>
    )
}

export default Navbar
