import React from "react";
import { SlideSet, Slide, Heading, Text, Image, Appear, S } from "spectacle";

const images = {
  minimumWebApp: require("../assets/minimum-web-app.svg"),
  webAppScale: require("../assets/web-app-issues-scalability.svg"),
  webAppIssues: require("../assets/minimum-web-app-issues.svg"),
  webAppEnvironments: require("../assets/web-app-environments.svg"),
  verticalScaling: require("../assets/vertical-scaling.svg"),
  horizontalScaling: require("../assets/horizontal-scaling.svg"),
  environments: require("../assets/environments.svg")
};

export const architectureSlides = (
  <SlideSet>
    <Slide>
      <Heading fit textColor="tertiary">
        🏛 🌐 Web App Architecture 🌐 🏛
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.minimumWebApp} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        How will this scale?
      </Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Performance & Scalability
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          If you have a <S type="bold">performance</S> problem, your system is
          slow for a single user
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          If you have a <S type="bold">scalability</S> problem, your system is
          fast for a single user but slow under heavy load
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Vertical Scaling 🏋🏽
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading>🏋🏽</Heading>
      <Image src={images.verticalScaling} />
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.webAppIssues} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Horizontal scaling 💪🏽💪🏽💪🏽
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.horizontalScaling} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Stateless Applications
      </Heading>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Server does not store data or read data about a user's session on the
        machine it's running on
      </Text>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.webAppScale} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Latency
      </Heading>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Amount of time it takes for the host server to receive and process a
        request
      </Text>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Depends largely on where the user is from the server
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Minimizing Latency
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Browsers make multiple network requests at once
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Content delivery networks
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Front-end optimization
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Environments
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.environments} />
    </Slide>
  </SlideSet>
);
