import EventsPreview from "../../components/events-preview/events-preview.component";
import Slideshow from "../../components/slideshow/slideshow.component";

const Home = () => {
  return (
    <div style={{ padding: "110px 90px" }}>
      <Slideshow />
      <EventsPreview />
    </div>
  );
};

export default Home;
