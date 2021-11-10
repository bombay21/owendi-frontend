import styled from "styled-components";
import SideMenu from "./SideMenu";
import Slider from "./Slider";

const Container = styled.div`
display: flex;
padding: 0 15px;
`;

const Hero = () => {
  return (<Container>
      <SideMenu></SideMenu>
      <Slider></Slider>
  </Container>);
};

export default Hero;
