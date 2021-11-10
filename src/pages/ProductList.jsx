import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const Container = styled.div`

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: 0})}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })}
`;
const Option = styled.option`

`

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

const onTop = () => {
  window.scrollTo(0, 0);
};
 useEffect(() => {
   onTop();
 }, []);
  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={e => setSort(e.target.value)}>
              <Option value="newest" selected>Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
      </Container>
    );
}

export default ProductList
