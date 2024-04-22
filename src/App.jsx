import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import store from "./store/store";
import { Provider } from "react-redux";

import { getCurrentUser } from "./utils/firebase/firebase.utils";

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

function App() {
  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="create-event" element={<EventCreationPage />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="events/*" element={<Events />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
