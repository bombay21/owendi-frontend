import { ArrowLeftOutlined } from '@mui/icons-material'
import { ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { useState } from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  background: white;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Wrapper = styled.div`
  display: flex;
 height: 100%;
 transform: translateX(${props => props.slideIndex * -100}vw);
 transition: all 1s ease;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
  /* flex: 1; */
  height: 100%;
  overflow: hidden;
`
const InfoContainer = styled.div`
 flex: 2;
 padding: 50px;
`
const Title = styled.h1`
font-size: 40px;
`
const Description = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const ShopNow = styled.button`
padding: 10px;
background-color: transparent;
cursor: pointer;
`;
const Image = styled.img`
 /* flex: 1; */
 height: 100%;
 max-width: 100%;
 /* object-fit: cover; */
`

const Arrow = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideImage = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  console.log(sliderItems);

    return (
      <Container>
        <Arrow direction="left" onClick={() => slideImage("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              {/* <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <ShopNow>Shop Now</ShopNow>
              </InfoContainer> */}
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => slideImage("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    );
}

export default Slider
