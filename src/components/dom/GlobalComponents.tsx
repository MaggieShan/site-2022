import styled from "styled-components";

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  color: ${props => props.theme.text};
`;

export const Subtitle = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: ${props => props.theme.yellow};
`;

export const Text = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  color: ${props => props.theme.text};
`;
