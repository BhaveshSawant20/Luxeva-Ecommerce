import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

// Container styling
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap; // Allow items to wrap to the next line
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

// Set a fixed width for CategoryItem
const CategoryItemWrapper = styled.div`
  flex: 1 1 calc(33.33% - 20px); // Adjust based on desired spacing
  margin: 10px; // Add some spacing between items
  ${mobile({ flex: "1 1 100%", margin: "5px 0" })} // Stack items on mobile
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItemWrapper key={item.id}>
          <CategoryItem item={item} />
        </CategoryItemWrapper>
      ))}
    </Container>
  );
};

export default Categories;

