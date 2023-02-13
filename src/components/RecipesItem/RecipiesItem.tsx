import { IRecipes } from "../Recipes/Recipes";
import {
  Wrapper,
  Image,
  Text,
  Star,
  Price,
  StarImg,
  AddButton,
  AddText,
} from "./RecipiesItemStyled";
import stars from "../../assets/Star 1.png";

const RecipesItem = ({ link, title, star, price }: IRecipes) => {
  return (
    <Wrapper>
      <Image src={link} />
      <Text> {title}</Text>
      <Star>{star}</Star>
      <StarImg src={stars} />
      <AddButton>
        <AddText>Add to cart</AddText>
      </AddButton>
      <Price>{`${price}$`}</Price>
    </Wrapper>
  );
};

export default RecipesItem;
