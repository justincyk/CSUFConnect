import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

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
import EventSelect from "./events-autocomplete.component";
import zIndex from "@mui/material/styles/zIndex";

const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eventSearch, setEventSearch] = useState(null);

  const onEventSelect = (event) => {
    if (event != null) {
      setEventSearch(event);
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(logOffUser());
      navigate("/authentication");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = () => {
    if (eventSearch != null) {
      navigate(`/events/${eventSearch.category}/${eventSearch.id}`);
    }
  };
  return (
    <>
      <NavigationContainer>
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
          <EventSelect onEventSelect={onEventSelect} />

          <Button
            variant="contained"
            style={{ width: "5vw", height: "50px" }}
            onClick={handleSearch}
          >
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
