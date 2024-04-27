import EventsPreview from "../../components/events-preview/events-preview.component";
import Slideshow from "../../components/slideshow/slideshow.component";

const Home = () => {
  return (
    <div style={{ paddingTop: "110px" }}>
      <Slideshow />
      <EventsPreview />
    </div>
  );
};

export default Home;
