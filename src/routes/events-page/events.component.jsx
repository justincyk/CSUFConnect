import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectOrganizedEvents } from "../../store/event/eventSlice";

import Category from "../category-page/category.component";
import EventCategoryPreview from "../../components/event-category-preview/event-category-preview.component";
import EventDescriptionPage from "../event-description-page/event-description-page.component";

const mockData = {
  University: [
    {
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 4",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 5",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 6",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
  ],
  Organization: [
    {
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
  ],
  Club: [
    {
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
  ],
  Group: [
    {
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
  ],
  Student: [
    {
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
    {
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
    },
  ],
};

const Events = () => {
  const events = useSelector(selectOrganizedEvents);

  return (
    <Routes>
      <Route
        index
        element={
          <EventCategoryPreview
            eventCategoriesMap={
              events && Object.keys(events).length > 0 ? events : mockData
            }
          />
        }
      />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:eventId" element={<EventDescriptionPage />} />
    </Routes>
  );
};

export default Events;
