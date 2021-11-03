import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
position: relative;
flex: 1;
margin: 3px;
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h2`
font-weight: 500;
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
background-color: white;
color: gray;
border: none;
padding: 10px;
cursor: pointer;
font-weight: 600;
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW!</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
