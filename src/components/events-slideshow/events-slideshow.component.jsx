import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import EventItemCard from "../event-item/event-item.component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { formatDate } from "../date-format/formatDate";

import "./events-slideshow.styles.scss";

const EventsSlideshow = ({ category, events }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [numOfCards, setNumOfCards] = useState(0);
  const [currentEventsIndexes, setCurrentEventsIndexes] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    setNumOfCards(Math.floor(containerSize.width / 370));
  }, [containerSize.width]);

  const handleToggleBack = () => {
    setCurrentEventsIndexes((prev) => Math.max(0, prev - 1));
  };

  const handleToggleForward = () => {
    setCurrentEventsIndexes((prev) =>
      Math.min(prev + 1, events.length - numOfCards)
    );
  };

  return (
    <div className="events-preview-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2 style={{ fontSize: "25px", color: "#00244E" }}>
          {category.toUpperCase()}
        </h2>
        <Link
          className="category-link"
          to={category}
          style={{
            color: "white",
            backgroundColor: "#00244E",
            marginRight: "20px",
          }}
        >
          See More {category} Events
        </Link>
      </div>

      <div className="events-container" ref={containerRef}>
        <ArrowBackIosIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "#00244E" }}
          onClick={handleToggleBack}
          className={currentEventsIndexes <= 0 ? "disabled" : ""}
        />
        {events && events.length > 0 ? (
          events
            .slice(
              currentEventsIndexes,
              Math.min(currentEventsIndexes + numOfCards, events.length)
            )
            .map((event, index) => (
              <EventItemCard
                eventName={event.name}
                eventShortDescription={event.eventShortDescription}
                eventDate={formatDate(event.startDateAndTime)}
                key={event.id}
                eventCategory={category}
                eventID={event.id}
                imgURL={event.image}
              />
            ))
        ) : (
          <div>No Current Events</div>
        )}
        <ArrowForwardIosIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "#00244E" }}
          onClick={handleToggleForward}
          className={
            currentEventsIndexes >= events.length - numOfCards ? "disabled" : ""
          }
        />
      </div>
    </div>
  );
};

export default EventsSlideshow;
