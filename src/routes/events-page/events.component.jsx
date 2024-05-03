import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectOrganizedEvents } from "../../store/event/eventSlice";

import Category from "../category-page/category.component";
import EventCategoryPreview from "../../components/event-category-preview/event-category-preview.component";
import EventDescriptionPage from "../event-description-page/event-description-page.component";

const mockData = {
  University: [
    {
      id: "1",
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 4",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 5",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 6",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
  ],
  Organization: [
    {
      id: "1",
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
    {
      id: "1",
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "University",
    },
  ],
  Club: [
    {
      id: "1",
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Club",
    },
    {
      id: "1",
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Club",
    },
    {
      id: "1",
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Club",
    },
  ],
  Group: [
    {
      id: "1",
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Group",
    },
    {
      id: "1",
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Group",
    },
    {
      id: "1",
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Group",
    },
  ],
  Student: [
    {
      id: "1",
      eventName: "event 1",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Student",
    },
    {
      id: "1",
      eventName: "event 2",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Student",
    },
    {
      id: "1",
      eventName: "event 3",
      eventShortDescription: "This is a short description",
      eventDate: "August 1, 1990",
      category: "Student",
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
