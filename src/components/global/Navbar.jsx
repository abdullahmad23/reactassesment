import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { NavLink } from 'react-router-dom';

// main container and all child component css
const MainContainer = styled.section`
display:flex;
align-items:center;
background:transparent;
`

// logo container and all child component css
const LogoContainer = styled.section`
flex:1;
`

// links container and all child component css
const LinksContainer = styled.section`
flex:2;

`
const Ul = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
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
`

// action container and all child component css
const ActionContainer = styled.section`
flex:1;
display:flex;
align-items:center;
justify-content:space-around;
`
const Anchor = styled.a`
text-decoration:none;

`
const Navbar = () => {
    return (
        <>
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="" width="323px" height="106px" />
                </LogoContainer>

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

                <SearchContainer>
                    <SearchContainerWrapper>
                        <SearchBar type='text' placeholder='Search Here' />
                        <SearchIcon />
                    </SearchContainerWrapper>
                    <LanguageButton>
                        <TranslateIcon />
                        ES
                    </LanguageButton>
                </SearchContainer>

                <ActionContainer>
                    <Anchor as={NavLink} to="/productDetail">
                        <ShoppingCartOutlinedIcon style={{color:"black"}} />
                    </Anchor>
                    <Anchor as={NavLink} to="/productDetail">
                        <NotificationsOutlinedIcon style={{color:"black"}} />
                    </Anchor>
                    <Anchor as={NavLink} to="/login">
                        <PermIdentityIcon style={{color:"black"}} />
                    </Anchor>
                </ActionContainer>
            </MainContainer>
        </>
    )
}

export default Navbar
