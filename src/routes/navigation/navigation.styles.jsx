import styled from "styled-components";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 99%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 2px solid #00244e;
  position: fixed;
  padding: 1rem 2rem;
  top: 0;
  overflow: hidden;
  background-color: white;
  z-index: 9999;
  font-size: 1.2rem;
  font-weight: bolder;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 300px;
  padding: 10px;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: #00244e;
`;

export const BoxContainer = styled(Box)``;
