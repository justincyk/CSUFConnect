import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Category from "../category-page/category.component";
import EventCategoryPreview from "../../components/event-category-preview/event-category-preview.component";

const eventCategoriesMap = {
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
  return (
    <Routes>
      <Route
        index
        element={
          <EventCategoryPreview eventCategoriesMap={eventCategoriesMap} />
        }
      />
      <Route path=":category" element={<Category />} />
      <Route path=":category/:eventId" element={<Event />} />
    </Routes>
  );
};

export default Events;
