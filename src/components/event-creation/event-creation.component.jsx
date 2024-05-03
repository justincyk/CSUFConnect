import { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputImageUpload from "../file-upload/image-upload.component";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { createEvent, getEvents } from "../../store/event/eventSlice";
import { selectUser } from "../../store/user/userSlice";

import SelectAutoWidth from "../select-option/select-auto-width.component";

import { CategoryEnum } from "./categoryEnum";
import { validateState } from "./validState";

const initialLocation = {
  address: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
};

function isValidZipCode(zipCode) {
  const zip = parseInt(zipCode);
  if (isNaN(zip)) {
    return false;
  }
  return zip >= 10000 && zip <= 99999;
}

import "./event-creation.styles.css";
const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [eventShortDescription, setEventShortDescription] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventLocation, setEventLocation] = useState(initialLocation);
  const [startDateAndTime, setStartDateAndTime] = useState(dayjs());
  const [endDateAndTime, setEndDateAndTime] = useState(dayjs());
  const [eventImage, setEventImage] = useState(null);
  const loggedInUser = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      eventName.trim() === "" ||
      eventShortDescription.trim() === "" ||
      eventDescription.trim() === "" ||
      selectedCategory.trim() === "" ||
      eventLocation.address.trim() === "" ||
      eventLocation.city.trim() === "" ||
      eventLocation.state.trim() === "" ||
      eventLocation.zipCode.trim() === ""
    ) {
      alert("Please fill out all required fields");
      return;
    }

    if (!isValidZipCode(eventLocation.zipCode)) {
      alert("Please make sure ZIP code is correct.");
      return;
    }

    if (validateState(eventLocation.state) == null) {
      alert("Please enter a valid state.");
      return;
    } else {
      eventLocation.state = validateState(eventLocation.state);
    }

    if (startDateAndTime >= endDateAndTime) {
      alert(
        "Please make sure the end date and time is later than the start date and time."
      );
      return;
    }

    let eventData = {
      id: "",
      name: eventName,
      shortDescription: eventShortDescription,
      description: eventDescription,
      category: CategoryEnum[selectedCategory],
      location: eventLocation,
      startDateAndTime: startDateAndTime.toISOString(),
      endDateAndTime: endDateAndTime.toISOString(),
      student_id: loggedInUser.id,
      eventImage: eventImage != null ? eventImage : null,
    };

    dispatch(createEvent(eventData))
      .then((result) => {
        if (result.payload) {
          dispatch(getEvents());
        }
      })
      .catch((error) => console.error("Error creatine event: ", error));

    setEventName("");
    setEventDescription("");
    setEventShortDescription("");
    setStartDateAndTime(dayjs());
    setEndDateAndTime(dayjs());
    setEventImage(null);
    setEventLocation({
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    });
    setStartDateAndTime(dayjs());
    setEndDateAndTime(dayjs());
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setEventImage(img);
    }
  };

  return (
    <div className="event-creation-container">
      <p>Event Information</p>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <TextField
          id="event-name"
          label="Event Name"
          variant="outlined"
          control="true"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
          sx={{ width: "300px" }}
          inputProps={{ maxLength: 30 }}
          required={true}
        />
        <TextField
          id="event-short-description"
          label="Short Event Description"
          control="true"
          multiline
          value={eventShortDescription}
          onChange={(event) => setEventShortDescription(event.target.value)}
          maxRows={4}
          sx={{ width: "300px" }}
          inputProps={{ maxLength: 80 }}
          required={true}
        />
        <TextField
          id="event-description"
          label="Detailed Event Description"
          control="true"
          multiline
          value={eventDescription}
          onChange={(event) => setEventDescription(event.target.value)}
          maxRows={4}
          sx={{ width: "300px" }}
          inputProps={{ maxLength: 200 }}
          required={true}
        />

        <SelectAutoWidth
          label="Event Category"
          options={[
            "University Event",
            "Club Event",
            "Organization Event",
            "Group Meet Up",
            "Student Hosted",
          ]}
          required={true}
          defaultValue={"University Event"}
          onChange={(value) => {
            setSelectedCategory(value);
          }}
        />

        <div className="event-location-container">
          <p>Event Location</p>
          <TextField
            id="event-location-address"
            label="Address"
            control="true"
            value={eventLocation.address}
            onChange={(event) =>
              setEventLocation((prev) => ({
                ...prev,
                address: event.target.value,
              }))
            }
            sx={{ width: "300px" }}
            inputProps={{ maxLength: 80 }}
            required={true}
          />
          <TextField
            id="event-location-address"
            label="Address 2"
            control="true"
            value={eventLocation.address2}
            onChange={(event) =>
              setEventLocation((prev) => ({
                ...prev,
                address2: event.target.value,
              }))
            }
            sx={{ width: "300px" }}
            inputProps={{ maxLength: 80 }}
          />
          <TextField
            id="event-location-city"
            label="City"
            control="true"
            value={eventLocation.city}
            required={true}
            onChange={(event) =>
              setEventLocation((prev) => ({
                ...prev,
                city: event.target.value,
              }))
            }
            sx={{ width: "300px" }}
            inputProps={{ maxLength: 80 }}
          />
          <TextField
            id="event-location-state"
            label="State"
            control="true"
            required={true}
            value={eventLocation.state}
            onChange={(event) =>
              setEventLocation((prev) => ({
                ...prev,
                state: event.target.value,
              }))
            }
            sx={{ width: "300px" }}
            inputProps={{ maxLength: 80 }}
          />
          <TextField
            id="event-location-zipcode"
            label="ZIP Code"
            control="true"
            value={eventLocation.zipCode}
            onChange={(event) =>
              setEventLocation((prev) => ({
                ...prev,
                zipCode: event.target.value,
              }))
            }
            sx={{ width: "300px" }}
            inputProps={{ maxLength: 80 }}
            required={true}
          />
        </div>

        <div className="event-date-container">
          <p>Event Date and Time</p>
          <DateTimePicker
            label="Start Date and Time"
            disablePast
            value={startDateAndTime}
            required={true}
            onChange={(newValue) => setStartDateAndTime(newValue)}
          />
          <DateTimePicker
            label="End Date and Time"
            disablePast
            value={endDateAndTime}
            minDateTime={startDateAndTime}
            required={true}
            onChange={(newValue) => setEndDateAndTime(newValue)}
          />
        </div>

        <InputImageUpload onChange={handleImageUpload} />

        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default EventCreation;
