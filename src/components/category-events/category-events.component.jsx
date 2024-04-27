import { EventsItemContainer } from "./category-events.styles";
import EventItemCard from "../event-item/event-item.component";

const CategoryEvents = ({ items }) => {
  return (
    <EventsItemContainer>
      {items.map((_, index) => (
        <EventItemCard
          eventName={`test ${index + 1}`}
          eventDate={"August 1, 1990"}
          eventShortDescription={
            "hello there this is a test description for this card"
          }
          key={index}
        />
      ))}
    </EventsItemContainer>
  );
};

export default CategoryEvents;
