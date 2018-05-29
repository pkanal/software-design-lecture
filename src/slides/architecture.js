import React from "react";
import { SlideSet, Slide, Heading, Text, Image, Appear } from "spectacle";

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
      <Heading caps fit>
        Web App Architecture
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        What do we care about
      </Heading>
      <Text size={3} textColor="secondary">
        Working software
      </Text>
      <Text size={3} textColor="secondary">
        User experience
      </Text>
      <Text size={3} textColor="secondary">
        Developer experience
      </Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        Working software
      </Heading>
    </Slide>
    <Slide>
      <Image src={images.minimumWebApp} />
    </Slide>
    <Slide>
      <Heading caps fit>
        How will this scale?
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        Performance & Scalability
      </Heading>
      <Text size={3} textColor="secondary">
        If you have a *performance* problem, your system is slow for a single
        user
      </Text>
      <Text size={3} textColor="secondary">
        If you have a scalability problem, your system is fast for a single user
        but slow under heavy load
      </Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        Vertical Scaling 💪🏽
      </Heading>
    </Slide>
    <Slide>
      <Heading>💪🏽💪🏽💪🏽</Heading>
      <Image src={images.verticalScaling} />
    </Slide>
    <Slide>
      <Image src={images.webAppIssues} />
    </Slide>
    <Slide>
      <Heading caps fit>
        Horizontal scaling
      </Heading>
    </Slide>
    <Slide>
      <Image src={images.horizontalScaling} />
    </Slide>
    <Slide>
      <Heading caps fit>
        Stateless Applications
      </Heading>
    </Slide>
    <Slide>
      <Text>
        Server does not store data or read data about a user's session on the
        machine it's running on
      </Text>
    </Slide>
    <Slide>
      <Image src={images.webAppScale} />
    </Slide>
    <Slide>
      <Heading caps fit>
        Latency
      </Heading>
    </Slide>
    <Slide>
      <Text>
        Amount of time it takes for the host server to receive and process a
        request
      </Text>
      <Text>Depends largely on where the user is from the server</Text>
    </Slide>
    <Slide>
      <Text>Browsers make multiple network requests at once</Text>
      <Text>Content delivery networks</Text>
      <Text>Front-end optimization</Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        Environments
      </Heading>
    </Slide>
    <Slide>
      <Image src={images.environments} />
    </Slide>
  </SlideSet>
);
