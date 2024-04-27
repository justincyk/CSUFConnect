import { EventsItemContainer } from "./category-events.styles";
import EventItemCard from "../event-item/event-item.component";

const CategoryEvents = ({ items, category }) => {
  return (
    <EventsItemContainer>
      {items.map((item, index) => (
        <EventItemCard
          eventName={`test ${index + 1}`}
          eventID={index + 1}
          eventDate={"August 1, 1990"}
          eventShortDescription={
            "hello there this is a test description for this card"
          }
          key={index}
          eventCategory={category}
        />
      ))}
    </EventsItemContainer>
  );
};

export default CategoryEvents;
