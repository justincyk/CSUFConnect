import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { CategoryTitle, CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  //   const categoriesMap = useSelector(selectCategoriesMap);
  //   const isLoading = useSelector(selectCategoriesIsLoading);
  //   //  categoriesMap[category] will be initially an empty object so we can assign it to products
  //   const [products, setProducts] = useState(categoriesMap[category]);

  //   useEffect(() => {
  //     setProducts(categoriesMap[category]);
  //     console.log("useEffect category ran");
  //     console.log(`products is set to: ${products}`);
  //   }, [category, categoriesMap]);
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
    <div style={{ marginTop: "120px" }}>{category}</div>
  );
};

export default Category;
