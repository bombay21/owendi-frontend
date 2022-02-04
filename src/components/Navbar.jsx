import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  -webkit-box-shadow: 0 4px 4px -4px rgb(0 0 0 / 12%);
  box-shadow: 0 4px 4px -4px rgb(0 0 0 / 12%);
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  border: 2px solid black;
  border-radius: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  padding: 10px 20px;
  width: 100%;
  ${mobile({ width: "50px" })}

  &:focus{
    outline: none;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const HomeLink = styled(Link)`
  color: initial !important;
  text-decoration: none;
`;

const Navbar = () => {
const {quantity} = useSelector(state=>state.cart)
const {currentUser} = useSelector(state=>state.user)

    return (
      <Container>
        <Wrapper>
          <Left>
            <HomeLink to="/">
              <Logo>O'wendi</Logo>
            </HomeLink>
          </Left>
          <Center>
            <SearchContainer>
              <Input placeholder="Search products, categories and brands" />
              <Search style={{ color: "gray", fontSize: 20 }} />
            </SearchContainer>
          </Center>
          <Right>
            {!currentUser && (
              <>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
              </>
            )}

            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="warning">
                  <ShoppingCartOutlined color="action" style={{color:'black'}} />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    );
}

export default Navbar
