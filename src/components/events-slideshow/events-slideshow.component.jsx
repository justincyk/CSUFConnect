import { useState } from "react";
import { Link } from "react-router-dom";

import EventItemCard from "../event-item/event-item.component";

const EventsSlideshow = ({ category, events }) => {
  const [currentEventsIndexes, setCurrentEventsIndexes] = useState(
    events.length < 3 ? events.length : 2
  );
  return (
    <div>
      <Link
        to={category}
        style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
      >
        {category.toUpperCase()}
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {events
          .filter(
            (_, index) =>
              index >= currentEventsIndexes - 2 &&
              index <= currentEventsIndexes &&
              index >= 0
          )
          .map((event, index) => (
            <EventItemCard
              eventName={event.eventName}
              eventShortDescription={event.eventShortDescription}
              eventDate={event.eventDate}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default EventsSlideshow;
