import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// import {
//   selectCategoriesMap,
//   selectCategoriesIsLoading,
// } from "../../store/categories/category.selector";

import Spinner from "../../components/spinner/spinner.component";

const Event = () => {
  const { event } = useParams();
  // const categoriesMap = useSelector(selectCategoriesMap);
  // const isLoading = useSelector(selectCategoriesIsLoading);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log("useEffect category ran");
    console.log(`products is set to: ${products}`);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{event.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
