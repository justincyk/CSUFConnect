import { useSelector, useDispatch } from "react-redux";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

import Footer from "../../components/footer/footer.component";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CSUFConnectLogo from "../../assets/logos/CSUFConnectLogo3.svg?react";
import { Outlet, useNavigate } from "react-router-dom";
import { selectUser } from "../../store/user/userSlice";
import Authentication from "../authentication/authentication.component";
import { logOffUser } from "../../store/user/userSlice";

const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      dispatch(logOffUser());
      navigate("/authentication");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <NavigationContainer style={{}}>
        <LogoContainer to="/">
          <CSUFConnectLogo />
        </LogoContainer>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            style={{ width: "25vw" }}
          />

          <Button variant="contained" style={{ width: "5vw" }}>
            Search
          </Button>
        </Box>
        <NavLinks>
          <NavLink to="/create-event">Create Event</NavLink>
          {user === null ? (
            <NavLink to="/authentication">Sign In</NavLink>
          ) : (
            <NavLink to="/" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
