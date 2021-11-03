import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
`

const Announcement = () => {
    return (
        <Container>
            Black Friday Deal! Get 20% off orders above NGN 25000
        </Container>
    )
}

export default Announcement
