import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 440px;
  border: 2px solid #ff7900;
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
