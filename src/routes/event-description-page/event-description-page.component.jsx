import { useParams } from "react-router-dom";
import { EventImageContainer } from "./event-description-page.styles";

const EventDescriptionPage = () => {
  const { eventId } = useParams();
  return (
    <div style={{ marginTop: "100px", height: "100vh" }}>
      <EventImageContainer />
    </div>
  );
};

export default EventDescriptionPage;
