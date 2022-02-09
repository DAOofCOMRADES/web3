import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Comrades")}</Language>
              <Large to="/">{t("Join the community")}</Large>
              <Para>
                {t(``)}
              </Para>
              <a href="https://0x739718b4b510468ec1cbdfe27b0e31ed050b50f9.mintgate.io/go/04yeP5RxAZ-G?network=1">
                <Chat>{t(`Join Our Discord`)}</Chat>
              </a>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="450 px"
                  height="50px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://mobile.twitter.com/DAOofComrades"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/"
                src="medium.svg"
              />
              <a href="mailto:daoofcomrades@gmail.com">
                <img
                  src="https://res.cloudinary.com/dao-of-comrades/image/upload/v1644261525/comrades-nav-header_jpc5bn.svg"
                  alt="Need help? Ask away"
                />
              </a>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
