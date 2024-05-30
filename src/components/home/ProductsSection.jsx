import React, {useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';


const CategorySection = styled.section`
display:flex;
justify-content:space-between;
align-item:center;
padding-left:5%;
margin-bottom:10px;
flex-wrap:wrap;
@media (max-width: 900px) {
    flex-direction:column;
}
`
const CatLeft = styled.section`
flex:1;
`
const Para = styled.p`
margin:0;
font-size:${props => props.fontsize}
`
const H4 = styled.h4`
margin:0;
font-size:30px;
font-weight:700;
`
const CatRight = styled.section`
flex:1;
display:flex;
justify-content:space-between;
align-item:flex-end;
@media (max-width: 500px) {
    flex-direction:column;
    padding:5% 0;
}
`
const CatRightBtn = styled.section`
flex:3;
`
const Btn = styled.button`
padding:10px 20px;
border-radius:50px;
margin:0 10px;
color:${props => props.color};
border-width:${props => props.color === "white" ? "0px" : "1px"};
background-color:${props => props.bg};
font-weight:600;
@media (max-width: 900px) {
    padding:10px 15px;
}
`
const CatAction = styled.section`
flex:1;
`
const ActionBtn = styled.button`
background-color:transparent;
border:none;
`

// cards section going to start here
const CardsSection = styled.section`
display:flex;
background:transparent;
overflow:scroll;
padding-left:5%;
scrollbar-width: none;
`
const Card = styled.section`
min-width:20%;
margin:10px;
padding:10px;
background-color:white;
@media (max-width: 900px) {
    min-width:30%;
}
@media (max-width: 700px) {
    min-width:40%;
}
@media (max-width: 500px) {
    min-width:70%;
}
@media (max-width: 300px) {
    min-width:90%;
}
`
const Image = styled.img`
width:100%;
height:200px;
object-fit:cover;
border-radius:20px;
`
const H5 = styled.h5`
margin:5px;
font-size:15px;
font-weight:600;
`
const PriceContainer = styled.section`
`
const Price = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const Quantity = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
`
const DetailsContainer = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
`
const DetailBtn = styled.button`
flex:6;
margin:5px 10px;
padding:10px;
border-radius:10px;
border:1px solid black;
`
const CartBtn = styled.button`
flex:1;
border-radius:10px;
border:1px solid black;
background-color:#37383E;
color:white;
padding:3px
`
const ProductsSection = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getAllProducts = async()=>{
            await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }
        getAllProducts()
    })

    function truncateString(str, length, ending = "...") {
        if (str.length <= length) return str;
        return str.slice(0, length - ending.length) + ending;
    }

    const handleDetail = (item)=>{
        navigate(`/productDetail/${item.id}` ,{state:{item}})
    }
    return (
        <>
            <CategorySection>
                <CatLeft>
                    <Para fontsize="20px">marketplace</Para>
                    <H4>Popular Products</H4>
                </CatLeft>
                <CatRight>
                    <CatRightBtn>
                        <Btn color="white" bg="#EDC74C">All</Btn>
                        <Btn color="black" bg="white">Popular</Btn>
                        <Btn color="black" bg="white">Frozen</Btn>
                        <Btn color="black" bg="white">Crunchy</Btn>
                    </CatRightBtn>
                    <CatAction>
                        <ActionBtn><ArrowCircleLeftOutlinedIcon style={{ fontSize: "40px", color: "#EDC74C" }} /></ActionBtn>
                        <ActionBtn><ArrowCircleRightOutlinedIcon style={{ fontSize: "40px", color: "#EDC74C" }} /></ActionBtn>
                    </CatAction>
                </CatRight>
            </CategorySection>
            <CardsSection>
                {products.map((item) => {
                    return (
                        <Card key={item.id}>
                            <Image src={item.image} />
                            <H5>{truncateString(item.title, 35)}</H5>
                            <Para fontsize="10px">{truncateString(item.description, 80)}</Para>
                            <PriceContainer>
                                <Price>
                                    <H5>$ {item.price}</H5>
                                    <Quantity>
                                        <RemoveCircleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
                                        1
                                        <ControlPointOutlinedIcon style={{ fontSize: "20px" }} />
                                    </Quantity>

                                </Price>
                            </PriceContainer>
                            <DetailsContainer>
                                <DetailBtn onClick={()=>handleDetail(item)}>More Details</DetailBtn>
                                <CartBtn><ShoppingCartOutlinedIcon /></CartBtn>
                            </DetailsContainer>
                        </Card>
                    )
                })}
            </CardsSection>
        </>
    )
}

export default ProductsSection
