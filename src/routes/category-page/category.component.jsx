import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import CategoryEvents from "../../components/category-events/category-events.component";
const items = [
  {
    eventName: "event 1",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 2",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 1",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 2",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 1",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 2",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 1",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 2",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
  {
    eventName: "event 3",
    eventId: "1",
    eventShortDescription: "This is a short description",
    eventDate: "August 1, 1990",
  },
];

const Category = () => {
  const { category } = useParams();
  const [currentIndex, setCurrentIndex] = useState(
    items.length < 5 ? items.length - 1 : 5
  );

  return (
    <CategoryContainer>
      <CategoryTitle>{category} Events</CategoryTitle>
      <CategoryEvents
        items={items.slice(0, currentIndex)}
        category={category}
      />
      <button
        onClick={() =>
          setCurrentIndex((prev) => Math.min(items.length - 1, prev + 5))
        }
        style={{
          backgroundColor:
            currentIndex === items.length - 1 ? "#cccccc" : "#00244E",
          color: currentIndex === items.length - 1 ? "black" : "white",
          cursor: currentIndex === items.length - 1 ? "not-allowed" : "pointer",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          marginTop: "20px",
          border: "1px solid black",
        }}
        disabled={currentIndex === items.length - 1}
      >
        {currentIndex === items.length - 1
          ? "No More Events"
          : "Load More Events"}
      </button>
    </CategoryContainer>
  );
};

export default Category;
