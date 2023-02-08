import { FC } from "react";
import { HeaderLogo, HeaderSandwich, Wrapper } from "./HeaderStyled";
import logo from "../../assets/Logo.png";
import sandwitch from "../../assets/sandwich.png";
import { ImSearch } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";

import { GoThreeBars } from "react-icons/go";

// interface Icons {
//   way: IconType;
//   alt: string;
// }

// const iconsData: Icons[] = [
//   { way: ImSearch, alt: "search" },
//   { way: ImBriefcase, alt: "suitcase" },
//   { way: GoThreeBars, alt: "hamburger" },
// ];

const Header: FC = () => {
  const style = {
    paddingRight: "62px",
    paddingTop: "20px",
    cursor: "pointer",
    fontSize: "25px",
  };
  return (
    <Wrapper>
      <HeaderLogo src={logo} />
      <HeaderSandwich src={sandwitch} />
      <ImSearch style={style} />
      <ImBriefcase style={style} />
      <GoThreeBars style={style} />
    </Wrapper>
  );
};

export default Header;
