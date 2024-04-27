import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { CategoryContainer, CategoryTitle } from "./category.styles";

import CategoryEvents from "../../components/category-events/category-events.component";
const items = [
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
];

const Category = () => {
  const { category } = useParams();

  return (
    // <Fragment>
    //   <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    //   {isLoading ? (
    //     <Spinner />
    //   ) : (
    //     <CategoryContainer>
    //       {/* Only render products if products is defined. A safeguard as categoriesMap object is retrieved from an async function. */}
    //       {/* If you have components that rely on a async fetched code, then you need to put in safeguards
    //     so that you only render your components only if the actual data is present*/}
    //       {products &&
    //         products.map((product) => {
    //           return <ProductCard key={product.id} product={product} />;
    //         })}
    //     </CategoryContainer>
    //   )}
    // </Fragment>
    <CategoryContainer>
      <CategoryTitle>{category} Events</CategoryTitle>
      <CategoryEvents items={items} />
      <button>Load More Events</button>
    </CategoryContainer>
  );
};

export default Category;
