import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventImageContainer } from "./event-description-page.styles";

import { useSelector } from "react-redux";

import { selectEventById } from "../../store/event/eventSlice";

const EventDescriptionPage = () => {
  const { eventId } = useParams();
  const event = useSelector(selectEventById(eventId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginTop: "100px", height: "1000px" }}>
      <EventImageContainer
        imageUrl={
          event.image ??
          "https://csufconnect-images-bucket.s3.amazonaws.com/eventNoPicture.svg"
        }
      />
      <div>
        <h1>Event: {event.name}</h1>
        <p>Description: {event.description}</p>
        <p>
          Start Date and Time: {event.startDateAndTime.split("T")[0]} at{" "}
          {event.startDateAndTime.split("T")[1].substring(0, 5)} 24H
        </p>
        <p>
          End Date and Time: {event.endDateAndTime.split("T")[0]} at{" "}
          {event.endDateAndTime.split("T")[1].substring(0, 5)} 24H
        </p>
        <p>
          Location:{" "}
          {`${event.location.address}, ${event.location.city}, ${event.location.state}, ${event.location.zipCode} `}
        </p>
        <p>{`Type of Event: ${event.category} Event`}</p>
      </div>
    </div>
  );
};

export default EventDescriptionPage;
