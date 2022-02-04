import { Add, Remove } from "@mui/icons-material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"
import { publicRequest } from "../requestMethods"
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
max-width: 85%;
object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
font-weight: 200;
`;
const Desc = styled.p`
margin: 20px 0;
`;
const Price = styled.div`
font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
`;
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0 5px;
`;

const Button = styled.button`
cursor: pointer;
padding: 15px;
border: 2px solid teal;
background-color: white;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;

const ProductItem = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  let [quantity, setItemQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

const handleQuantity = (e) => {
  if(e === "inc"){
    quantity = quantity + 1;
  }
  else{
    if(quantity > 1){
      quantity = quantity - 1;
    }
  }
  setItemQuantity(quantity);
};

const handleAddToCart = () => {
  dispatch(addProduct({...product, quantity, color, size}))
}

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>&#8358; {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((item) => (
                <FilterColor
                  color={item}
                  key={item}
                  onClick={() => setColor(item)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((item) => (
                  <FilterSizeOption key={item}>{item}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={(e) => handleAddToCart(e.target.value)}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductItem
