import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EventItemCard from "../event-item/event-item.component";
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

const EventsPreview = () => {
  const [filter, setFilter] = useState(filterOptions.upcoming);
  const items = new Array(5).fill();

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
        {items.map((_, index) => (
          <EventItemCard
            eventName={`test ${index + 1}`}
            eventDate={"August 1, 1990"}
            eventShortDescription={
              "hello there this is a test description for this card"
            }
            eventID={index + 1}
            key={index}
            eventCategory={"Organization"}
          />
        ))}
      </EventsItemContainer>
    </EventsPreviewContainer>
  );
};

export default EventsPreview;
