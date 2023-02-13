import { IFeatures } from "../Features/Features";
import {
  FeaturesPhoto,
  FeaturesText,
  FeaturesTitle,
  WrapperItem,
} from "./FeaturesItemStyled";

const FeaturesItem = ({ link, title, text }: IFeatures) => {
  return (
    <WrapperItem>
      <FeaturesPhoto src={link} />
      <FeaturesTitle>{title}</FeaturesTitle>
      <FeaturesText>{text}</FeaturesText>
    </WrapperItem>
  );
};

export default FeaturesItem;
