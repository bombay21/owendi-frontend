import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { login } from "../redux/apiCalls";
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
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 0 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  &:disabled{
    background-color: grey;
    cursor: not-allowed;
  }
`;

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const Link = styled.a`
cursor: pointer;
color: ${props => props.color};
font-weight: ${props => props.weight};
`
const ErrorMessage = styled.span`
color: red;
`

const Login = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching,error} = useSelector((state)=>state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { email, password });
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <InnerWrapper>
          <Title>LOGIN</Title>
          <Form>
            <Input
              placeholder="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
            {error && <ErrorMessage>Incorrect email or password</ErrorMessage>}
            <LinkContainer>
              <Link>Forgot your password?</Link>
              <Link color="teal">Create Account</Link>
            </LinkContainer>
          </Form>
        </InnerWrapper>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Login;
