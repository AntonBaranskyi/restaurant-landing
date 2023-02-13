import { FC } from "react";
import {
  FoodBtn,
  FoodDescr,
  FoodTitle,
  FoodWrapper,
  ImgWrapper,
  MainWrapper,
  RestaurantText,
  SmileImg,
  Span,
  TitleImg1,
  SmileImg2,
  BigImg,
  SmallImg1,
  SmallImg2,
  SmallImg3,
  SocialDiv,
  SocialImg,
} from "./MainStyled";
import title1 from "../../assets/Title_img1.png";
import smile from "../../assets/smile.png";
import bg from "../../assets/big-back.png";
import big1 from "../../assets/for_big1.png";
import big2 from "../../assets/for_big2.png";
import big3 from "../../assets/for_big3.png";
import face from "../../assets/Facebook.png";
import twit from "../../assets/Twitter.png";
import insta from "../../assets/Instagram.png";

interface IPhoto {
  link: string;
  alt: string;
}

const photoData: IPhoto[] = [
  { link: face, alt: "Facebook" },
  { link: twit, alt: "Twitter" },
  { link: insta, alt: "Insta" },
];

const Main: FC = () => {
  return (
    <MainWrapper>
      <TitleImg1 src={title1} />
      <TitleImg1 style={{ left: "623px" }} src={title1} />
      <SmileImg src={smile} />
      <SmileImg2 src={smile} />

      <FoodWrapper>
        <RestaurantText>__Restaurant </RestaurantText>

        <FoodTitle>
          Good food <br></br> Good m <Span>d</Span>
        </FoodTitle>

        <FoodDescr>
          The food palace is an neighborhood restaurent serving seasonal global
          cuisine driven by the faire.
        </FoodDescr>

        <FoodBtn>Explore Food Menu</FoodBtn>
        <SocialDiv>
          {photoData &&
            photoData.map((item) => {
              return <SocialImg src={item.link} alt={item.alt} />;
            })}
        </SocialDiv>
      </FoodWrapper>

      <ImgWrapper>
        <SmallImg1 src={big1} />
        <SmallImg2 src={big2} />
        <SmallImg3 src={big3} />

        <BigImg src={bg} />
      </ImgWrapper>
    </MainWrapper>
  );
};

export default Main;
