import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const EventCategories = ({ category, events }) => {
  return (
    <CategoryPreviewContainer>
      <div>
        <h2>{category}</h2>
        <Title to={category}>{category.toUpperCase()}</Title>
      </div>
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
