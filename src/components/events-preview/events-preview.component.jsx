import EventItemCard from "../event-item/event-item.component";
import {
  EventsPreviewContainer,
  EventsHeader,
  EventsItemContainer,
} from "./events-preview.styles";

const EventsPreview = () => {
  const items = new Array(5).fill();
  return (
    <EventsPreviewContainer>
      <EventsHeader>
        <h2>Upcoming Events</h2>
        <span>
          Discover CSUF events hosted by students, clubs, and organizations
        </span>
      </EventsHeader>
      <EventsItemContainer>
        {items.map((_) => (
          <EventItemCard />
        ))}
      </EventsItemContainer>
    </EventsPreviewContainer>
  );
};

export default EventsPreview;
