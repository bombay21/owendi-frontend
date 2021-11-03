import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin: 20px;
  ${mobile({ textAlign: "center", fontSize: "18px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: solid 1px #bbb;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
border: none;
flex: 8;
padding: 0 20px;
`
const Button = styled.button`
color: white;
background-color: teal;
border: none;
flex: 1;

`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely update from your favourite products.</Desc>
            <InputContainer>
                <Input placeholder="your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
