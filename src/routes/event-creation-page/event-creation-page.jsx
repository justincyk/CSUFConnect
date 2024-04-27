import EventCreation from "../../components/event-creation/event-creation.component";
import "./event-creation-page.scss";

const EventCreationPage = () => {
  return (
    <div className="event-creation-page-container">
      <h1>Event Form</h1>
      <EventCreation />
    </div>
  );
};

export default EventCreationPage;
