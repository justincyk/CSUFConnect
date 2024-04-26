import { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputImageUpload from "../file-upload/image-upload.component";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { createEvent } from "../../store/event/eventSlice";

import SelectAutoWidth from "../select-option/select-auto-width.component";

const CategoryEnum = {
  "University Event": "University",
  "Club Event": "Club",
  "Organization Event": "Organization",
  "Group Meet Up": "Group",
  "Student Hosted": "Student",
};

const initialLocation = {
  address: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
};

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
      eventLocation.zipCode.trim() === "" ||
      startDateAndTime >= endDateAndTime
    ) {
      alert(
        "Please fill out all required fields and ensure the end date and time is later than the start date and time"
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
    };

    // if (eventImage != null) {
    //   console.log(eventImage);
    //   formData.append("image", eventImage);
    // }

    dispatch(createEvent(eventData));

    setEventName("");
    setEventDescription("");
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
      <h2>Event Form</h2>
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
          label="Short Event Description (Hook)"
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
          inputProps={{ maxLength: 80 }}
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
