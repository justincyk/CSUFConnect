import { EventsItemContainer } from "./category-events.styles";
import EventItemCard from "../event-item/event-item.component";

import { formatDate } from "../../components/date-format/formatDate";

const CategoryEvents = ({ items, category }) => {
  return (
    <EventsItemContainer>
      {items.map((item) => (
        <EventItemCard
          eventName={item.name}
          eventID={item.id}
          eventDate={formatDate(item.startDateAndTime)}
          eventShortDescription={item.shortDescription}
          key={item.id}
          imgURL={item.image}
          eventCategory={category}
        />
      ))}
    </EventsItemContainer>
  );
};

export default CategoryEvents;
