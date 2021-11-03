import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG5pZ2VyaWFuJTIwZHJlc3N8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerWrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
text-align: center;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;

const Button = styled.button`
width: 100%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <InnerWrapper>
          <Title>CREATE ACCOUNT</Title>
          <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b> 
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </InnerWrapper>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Register;
