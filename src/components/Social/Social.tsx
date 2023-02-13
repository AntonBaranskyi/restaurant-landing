import {
  ColaImage,
  FoodImg,
  SocialLinks,
  SocialMain,
  SocialPhoto,
  SocialSelf,
  SocialText,
  SocialTitle,
  SocialWrappper,
} from "./SocialStyled";
import phone from "../../assets/Image.png";
import links from "../../assets/Food 5 1.png";
import cola from "../../assets/7.png";
import food from "../../assets/4.png";

const Social = () => {
  return (
    <SocialWrappper>
      <ColaImage src={cola} />
      <FoodImg src={food} />
      <SocialPhoto src={phone} />

      <SocialMain>
        <SocialSelf>Take away</SocialSelf>
        <SocialTitle>Simple Way To Order Your Food</SocialTitle>
        <SocialText>
          Keep healthy food readily available. When you get hungry, you’re more
          likely to eat the first thing you see on the counter or in the
          cupboard
        </SocialText>

        <SocialLinks src={links} />
      </SocialMain>
    </SocialWrappper>
  );
};

export default Social;
