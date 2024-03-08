import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import Footer from "../../components/footer/footer.component";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CSUFConnectLogo from "../../assets/logos/CSUFConnectLogo3.svg?react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <CSUFConnectLogo />
        </LogoContainer>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            width: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search Event"
            variant="outlined"
            style={{ width: "30vw" }}
          />
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            style={{ width: "10vw" }}
          />
        </Box>
        <NavLinks>
          <NavLink>Create Event</NavLink>
          <NavLink>Profile</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
