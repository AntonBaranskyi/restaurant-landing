import {
  ItemWrapper,
  RecipesSelf,
  RecipesTitle,
  Wrapper,
} from "./RecipesStyled";
import first from "../../assets/Rectangle 30.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import RecipesItem from "../RecipesItem/RecipiesItem";
import { FoodBtn } from "../Main/MainStyled";
import uniqid from "uniqid";

export interface IRecipes {
  link: string;
  title: string;
  star: number;
  price: number;
}

const recipesData: IRecipes[] = [
  { link: first, title: "Flame-boiled dish", star: 8.5, price: 19.99 },
  { link: second, title: "Peach Melba dish", star: 9.5, price: 20.99 },
  { link: third, title: "Delmonico Steak dish", star: 8.5, price: 18.99 },
];

const Recipes = () => {
  return (
    <Wrapper>
      <RecipesSelf>Recipes</RecipesSelf>
      <RecipesTitle>Most popular items</RecipesTitle>

      <ItemWrapper>
        {recipesData &&
          recipesData.map(({ link, title, star, price }) => {
            return (
              <RecipesItem
                key={uniqid()}
                link={link}
                title={title}
                star={star}
                price={price}
              />
            );
          })}
      </ItemWrapper>
      <FoodBtn>See more recipes</FoodBtn>
    </Wrapper>
  );
};

export default Recipes;
