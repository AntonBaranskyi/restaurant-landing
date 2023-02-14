import letter from "../../assets/footer/Frame 54.png";
import net from "../../assets/footer/bi_globe.png";
import logo from "../../assets/footer/Logo.png";
import ananas from "../../assets/footer/ananas.png";
import heart from "../../assets/footer/5.png";
import uniqid from "uniqid";
import {
  ColumnTitle,
  CompanyImg,
  CompanyLink,
  CompanyLogo,
  CompanyWrapper,
  FooterColumn,
  FooterImg,
  FooterItemsWrapper,
  FooterTag,
  HeartImg,
  LinkItem,
  LinkWrapper,
  ReservedWrapper,
  TextReserved,
} from "./FooterStyled";

interface ICompany {
  link: string;
  photo: string;
}

interface ILink {
  name: string;
  link: string;
}

interface IFooterLink {
  title: string;
  links: ILink[];
}

const footerData: IFooterLink[] = [
  {
    title: "Our menu",
    links: [
      { name: "Breakfest", link: "#" },
      { name: "Lunce", link: "#" },
      { name: "Dinner", link: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "about us", link: "#" },
      { name: "testimonial", link: "#" },
      { name: "event", link: "#" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { name: "Services", link: "#" },
      { name: "Support", link: "#" },
      { name: "Conditions", link: "#" },
    ],
  },

  {
    title: "Social Handles",
    links: [
      { name: "facebook", link: "#" },
      { name: "twitter", link: "#" },
      { name: "youtube", link: "#" },
    ],
  },
];

const companyData: ICompany[] = [
  { photo: letter, link: "info@food_palace.com" },
  { photo: net, link: "www.Food_palace.com" },
];

const Footer = () => {
  return (
    <div>
      <FooterTag>
        <FooterImg src={ananas} />

        <CompanyWrapper>
          <CompanyLogo src={logo} />
          {companyData &&
            companyData.map((item) => {
              return (
                <>
                  <CompanyImg src={item.photo} />
                  <CompanyLink>{item.link}</CompanyLink>
                </>
              );
            })}
        </CompanyWrapper>

        <FooterItemsWrapper>
          {footerData &&
            footerData.map(({ title, links }) => {
              return (
                <FooterColumn key={uniqid()}>
                  <ColumnTitle>{title}</ColumnTitle>

                  {links.map(({ name, link }) => {
                    return (
                      <ul>
                        <LinkWrapper>
                          <LinkItem href={link}>{name}</LinkItem>
                        </LinkWrapper>
                      </ul>
                    );
                  })}
                </FooterColumn>
              );
            })}
        </FooterItemsWrapper>
        <HeartImg src={heart} />
      </FooterTag>

      <ReservedWrapper>
        <TextReserved>
          Created with &hearts; by Sajib Das Supriyo for Twinkle Creative.
          Develop Anton Baranskyi. All rights reserved
        </TextReserved>
      </ReservedWrapper>
    </div>
  );
};

export default Footer;
