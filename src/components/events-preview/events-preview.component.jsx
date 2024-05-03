import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectEvents } from "../../store/event/eventSlice";
import EventItemCard from "../event-item/event-item.component";
import { formatDate } from "../date-format/formatDate";
import {
  EventsPreviewContainer,
  EventsHeader,
  EventsItemContainer,
} from "./events-preview.styles";

import Button from "@mui/material/Button";

const filterOptions = {
  upcoming: "Upcoming Events",
  byCategory: "By Category",
  byMostPopular: "By Popularity",
};

const mockData = [
  {
    name: "event 1",
    id: "1",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
    category: "University",
  },
  {
    name: "event 2",
    id: "2",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
    category: "Club",
  },
  {
    eventName: "event 3",
    eventId: "3",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
    category: "Student",
  },
  {
    eventName: "event 4",
    id: "1",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
    category: "Student",
  },
  {
    eventName: "event 5",
    id: "1",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
    category: "Organization",
  },
];

const EventsPreview = () => {
  const [filter, setFilter] = useState(filterOptions.upcoming);
  const events = useSelector(selectEvents);
  const items = events && events.length > 0 ? events : mockData;

  const navigate = useNavigate();

  const goToEventsPageHandler = () => {
    navigate("/events");
  };

  return (
    <EventsPreviewContainer>
      <EventsHeader>
        <h2>Upcoming Events</h2>
        <div
          className="subheader"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#00244E" }}>
            Discover CSUF events hosted by students, clubs, and organizations
          </span>
          <Button
            variant="outlined"
            style={{
              cursor: "pointer",
              color: "#00244E",
              border: "1px solid #00244E",
            }}
            onClick={goToEventsPageHandler}
          >
            See More Events
          </Button>
        </div>
      </EventsHeader>
      <EventsItemContainer>
        {items.map((event, index) => (
          <EventItemCard
            eventName={event.name}
            eventDate={formatDate(event.startDateAndTime)}
            eventShortDescription={event.shortDescription}
            eventID={event.id}
            imgURL={event.image}
            key={index}
            eventCategory={event.category}
          />
        ))}
      </EventsItemContainer>
    </EventsPreviewContainer>
  );
};

export default EventsPreview;
