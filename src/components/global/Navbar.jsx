import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

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
const Navbar = () => {
    return (
        <>
            <MainContainer>
                <LogoContainer>
                    <img src={logo} alt="" width="323px" height="106px" />
                </LogoContainer>

                <LinksContainer>
                    <Ul>
                        <Li>home</Li>
                        <Li>marketplace</Li>
                        <Li>about us</Li>
                        <Li>contact us</Li>
                    </Ul>
                </LinksContainer>

                <SearchContainer>
                    <SearchContainerWrapper>
                        <SearchBar type='text' placeholder='Search Here' />
                        <SearchIcon/>
                    </SearchContainerWrapper>
                    <LanguageButton>
                        <TranslateIcon/>
                        ES
                    </LanguageButton>
                </SearchContainer>

                <ActionContainer>
                    <ShoppingCartOutlinedIcon/>
                    <NotificationsOutlinedIcon/>
                    <PermIdentityIcon/>
                </ActionContainer>
            </MainContainer>
        </>
    )
}

export default Navbar
