import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: grid;
  grid-column: span 5;
  justify-items: end;
  position: relative;
  justify-content: space-between;
`;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const Link = styled.li`
  margin: 1rem;
  text-align: center;
  font-weight: 900;
  font-size: 1.5rem;
  color: darkred;
  cursor: pointer;
`;

export const HamburgerMenu = styled.div`
  display: none;
  list-style-type: none;
  @media screen and (max-width: 840px) {
    display: block;
  }
  img {
    width: 64px;
    height: 64px;
    margin: 1rem;
  }
`;

export const HamburgerMenuShow = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.visible ? "0" : "-100%")};
  width: 100vw; /* Adjust the width as per your design */
  height: 100vh;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 64px;
    height: 64px;
    margin: 1rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-column: span 5;
  justify-items: center;
  padding: 1rem;
  max-width: 1700px;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    color: darkred;
    padding-bottom: 3rem;
    border-top: 1px solid darkred;
    padding-top: 3rem;
  }
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const TitleContainer = styled.div``;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 2rem;
  padding-left: 3em;
  padding-right: 1em;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 840px) {
    padding: 0;
  }
`;

export const AboutImage = styled.div`
  grid-row: span 3;
  justify-items: center;
  padding-bottom: 3em;
  width: 400px;
  height: 400px;
  overflow: hidden;
  img {
    width: 400px;
    height: 400px;
    padding-bottom: 1em;
    object-fit: cover;
    border-radius: 50%;
  }
  @media screen and (max-width: 840px) {
    width: 300px;
    height: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }
`;
export const AboutText = styled.div`
  grid-row: span 3;
  width: 80%;
  padding: 1rem;
`;

export const VerticalLine = styled.div`
  border-left: 1px dotted darkred;
  margin-right: 10px;
`;

export const TwoColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    justify-items: start;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  width: 48%; /* Adjust as needed, leaving some space for margins and padding */
  @media screen and (max-width: 840px) {
    width: 100%;
    padding-top: 1em;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  justify-items: center;
  padding-bottom: 3rem;
  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Skill = styled.div`
  display: grid;
  grid-column: span 1;
  width: 100%;
  border-radius: 5px;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  padding: 1rem;
  ul {
    list-style-type: none;
  }
  img {
    width: 20px;
    height: 20px;
  }
  li {
    display: flex;
    font-size: 17px;
  }
  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: start;
    justify-items: start;
    align-items: flex-start;
  }
`;

export const WorkExperience = styled.div`
  display: grid;
  width: 50%;
  justify-items: center;
  margin: auto;
  border-radius: 5px;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 840px) {
    width: 100%;
    grid-column: 1;
  }
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  img {
    object-fit: cover;
    padding-top: 2em;
    border-radius: 5px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.5);
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const Project = styled.div`
  grid-column: span 1;
  width: 90%;
  border-radius: 5px;
  justify-content: center;
  padding: 1rem;
  padding: 1rem;
  display: grid;
  align-content: space-between;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    padding-top: 2em;
    border-radius: 5px;
  }
`;

export const FooterContainer = styled.div`
  position: sticky;
  bottom: 0;
  background-color: darkred;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  align-content: center;
  grid-column: 1 / -1;
  height: 3rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  :hover {
    cursor: pointer;
  }
`;

export const LanguageSwitcher = styled.div`
  grid-column: 4;
  padding-top: 1em;
  padding-right: 1em;
`;

export const IconTransformer = styled.img`
  width: 30px;
  height: 30px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid darkred;
  border-radius: 5px;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  align-content: center;
  display: flex;
  height: 3rem;
  z-index: 1;
  width: 50vw;
  height: 40svh;
  button {
    border: none;
    background-color: white;
    color: darkred;
    font-size: 1.5rem;
    font-weight: 900;
    margin: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  width: 100%;
`;
