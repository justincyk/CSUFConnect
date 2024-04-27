import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 0;
  margin: 0 0;
  background-color: #00244e;
  ${`h1`} {
    margin: 20px auto;
    padding: 0 0;
    color: #ff7900;
  }
`;

export const AuthenticationForms = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  align-items: start;
  margin: 50px auto;
  margin-bottom: 60px;
  gap: 100px;
`;
