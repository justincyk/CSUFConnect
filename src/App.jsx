import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home";
import EventCreationPage from "./routes/event-creation-page/event-creation-page";
import Authentication from "./routes/authentication/authentication.component";
import Events from "./routes/events-page/events.component";
import { selectUser } from "./store/user/userSlice";
import { getEvents, selectEventStatus } from "./store/event/eventSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const eventStatus = useSelector(selectEventStatus);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  if (eventStatus === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        {user != null ? (
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="create-event" element={<EventCreationPage />} />
            <Route path="events/*" element={<Events />} />
          </Route>
        ) : (
          <>
            <Route path="/authentication" element={<Authentication />} />
            <Route path="*" element={<Navigate to="/authentication" />} />
          </>
        )}
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
