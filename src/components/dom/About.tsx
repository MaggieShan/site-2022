import styled from "styled-components";
import { Title, Subtitle, Text } from "./GlobalComponents";

const Container = styled.div`
  margin: 0 0 0 10%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;  
  justify-content: center;
`;

const About = () => {
  return (
    <>
    <Container>
      <div style={{ marginBottom: "3rem" }}>
        <Title>about</Title>
      </div>
      <div>
        <Subtitle>Welcome to my sandbox!</Subtitle>
        <Text>where I experiment with new tech and play around with product designs</Text>
      </div>
    </Container>
    </>
  );
};
  
export default About;
  