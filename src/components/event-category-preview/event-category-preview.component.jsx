import EventsSlideshow from "../../components/events-slideshow/events-slideshow.component";

const EventCategoryPreview = ({ eventCategoriesMap }) => {
  return (
    <div style={{ marginTop: "110px" }}>
      {Object.keys(eventCategoriesMap).map((category, index) => {
        const events = eventCategoriesMap[category];
        return (
          <EventsSlideshow category={category} events={events} key={index} />
        );
      })}
    </div>
  );
};

export default EventCategoryPreview;
