import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
cursor: pointer;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`

`;

const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>O'wendi</Logo>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            est fugiat, laudantium, vero reprehenderit quia maiores voluptas
            necessitatibus voluptate nemo consectetur vitae delectus. Tempore
            dicta debitis nobis omnis amet? Et.
          </Desc>
          <SocialContainer>
            <SocialIcon color="385999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
            <Title>Site map</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>For Men</ListItem>
                <ListItem>For Women</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms &amp; Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>+234 703 453 8485</ContactItem>
            <ContactItem>help@owendi.com</ContactItem>
            <ContactItem>owendi.com</ContactItem>
            <ContactItem>Lagos, Nigeria</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
      </Container>
    );
}

export default Footer
