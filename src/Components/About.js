import {
  ContentContainer,
  AboutContainer,
  AboutImage,
  AboutText,
  TwoColumnContainer,
  VerticalLine,
  Column,
} from "./styles";

import profileImage from "../images/image-about2.jpg";

export default function About(props) {
  const { language } = props;

  return (
    <ContentContainer id="about-me">
      <AboutContainer>
        <AboutImage>
          <img src={profileImage} alt="profile"></img>
        </AboutImage>
        {language === "swedish" ? <h1>Om mig</h1> : <h1>About me</h1>}
        <AboutText>
          {language === "swedish" ? (
            <TwoColumnContainer>
              <Column>
                <p>
                  Jag heter Niklas Johansson och är 35 år. Jag har
                  ett stort intresse för programmering, och jag längtar efter
                  att fördjupa de kunskaper jag tillägnade mig under min
                  utbildning inom frontendutveckling med fokus på webbsäkerhet.
                  Som person är jag glad och positiv, och jag har lätt för att
                  samarbeta med andra.
                </p>
              </Column>
              <VerticalLine></VerticalLine>
              <Column>
                <p>
                  Som person drivs jag av nyfikenhet, utmaningar och att göra
                  skillnad. På min fritid tycker jag om att lära mig nya saker,
                  allt från att titta på dokumentärer, lära mig spela schack
                  eller plugga ett nytt språk. Jag är en omtyckt vän och
                  kollega, och en god atmosfär är något jag värdesätter och
                  hoppas kunna bidra till i mitt framtida arbetsliv.{" "}
                </p>
              </Column>
            </TwoColumnContainer>
          ) : (
            <TwoColumnContainer>
              <Column>
                <p>
                  My name is Niklas Johansson and I am 35 years old. I have a strong interest in programming, and I look
                  forward to deepening the knowledge I acquired during my
                  education in frontend development with a focus on web
                  security. As a person, I am cheerful and positive, and I find
                  it easy to collaborate with others.
                </p>
              </Column>
              <VerticalLine></VerticalLine>
              <Column>
                <p>
                  As a person, I am driven by curiosity, challenges, and making
                  a difference. In my free time, I enjoy learning new things,
                  whether it's watching documentaries, learning to play chess,
                  or studying a new language. I am a well-liked friend and
                  colleague, and a good atmosphere is something I value and hope
                  to contribute to in my future career.
                </p>
              </Column>
            </TwoColumnContainer>
          )}
        </AboutText>
      </AboutContainer>
    </ContentContainer>
  );
}
