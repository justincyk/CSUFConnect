import styled from "styled-components";

export const EventImageContainer = styled.div`
  width: 100%;
  height: 370px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border: 4px black solid;
`;
