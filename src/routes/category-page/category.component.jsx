import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectOrganizedEvents } from "../../store/event/eventSlice";

import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import CategoryEvents from "../../components/category-events/category-events.component";
const mockData = [
  {
    name: "event 1",
    id: "1",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 2",
    id: "2",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 3",
    id: "3",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 4",
    id: "4",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 5",
    id: "5",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 6",
    id: "6",
    shortDescriptionn: "This is a short description",
    startDateAndTimee: "August 1, 1990",
  },
  {
    name: "event 7",
    id: "7",
    shortDescriptionn: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
  {
    name: "event 8",
    id: "8",
    shortDescription: "This is a short description",
    startDateAndTime: "August 1, 1990",
  },
];

const Category = () => {
  const { category } = useParams();
  const events = useSelector(selectOrganizedEvents);
  const data = events[category] ?? mockData;

  const [currentIndex, setCurrentIndex] = useState(
    data.length < 5 ? data.length - 1 : 5
  );

  useEffect(() => {
    setCurrentIndex(
      data.length < 5 ? (data.length > 0 ? data.length - 1 : 0) : 5
    );
  }, [events]);

  console.log(currentIndex);
  return (
    <CategoryContainer>
      <CategoryTitle>{category} Events</CategoryTitle>
      <CategoryEvents
        items={data.slice(0, currentIndex + 1)}
        category={category}
      />
      <button
        onClick={() =>
          setCurrentIndex((prev) => Math.min(data.length - 1, prev + 5))
        }
        style={{
          backgroundColor:
            currentIndex === data.length - 1 ? "#cccccc" : "#00244E",
          color: currentIndex === data.length - 1 ? "black" : "white",
          cursor: currentIndex === data.length - 1 ? "not-allowed" : "pointer",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          marginTop: "20px",
          border: "1px solid black",
        }}
        disabled={currentIndex === data.length - 1}
      >
        {currentIndex === data.length - 1
          ? "No More Events"
          : "Load More Events"}
      </button>
    </CategoryContainer>
  );
};

export default Category;
