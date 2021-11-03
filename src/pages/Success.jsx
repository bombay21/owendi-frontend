import { useLocation } from "react-router";
import styled from "styled-components";
import successimage from "../images/green-payment-success.gif";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
`;
const Title = styled.h1`
  
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Success = () => {
  const location = useLocation();
  const {state: {data}} = location
  console.log(location)
  return (
    <Container>
      <Image src={successimage} />
      <Title>{data}</Title>
    </Container>
  );
};

export default Success;
