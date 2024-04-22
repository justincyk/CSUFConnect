import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const EventCategories = ({ category, events }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={category}>{category.toUpperCase()}</Title>
      </h2>
      <Preview>
        {events
          .filter((_, idx) => idx < 4)
          .map((event, index) => (
            <h3 key={index}>test</h3>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default EventCategories;
