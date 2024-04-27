import EventCreation from "../../components/event-creation/event-creation.component";
import "./event-creation-page.scss";

const EventCreationPage = () => {
  return (
    <div className="event-creation-page-container">
      <h1 style={{ color: "white" }}>Event Form</h1>
      <EventCreation />
    </div>
  );
};

export default EventCreationPage;
