import React from "react";
import { SlideSet, Slide, Heading, Text, Appear } from "spectacle";

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading caps fit>
        🍦 Software Design 🍦
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        What do we care about
      </Heading>
      <Appear>
        <Text size={3} textColor="secondary">
          Working software
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          User experience
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          Developer experience
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading caps fit>
        What do we need consider when we design apps
      </Heading>
      <Appear>
        <Text size={3} textColor="secondary">
          System Architecture
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          Code Patterns
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          Environment the app runs in
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading caps fit>
        Specifically though...
      </Heading>
      <Appear>
        <Text size={3} textColor="secondary">
          Web App Architecture
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          Separating concerns in the codebase
        </Text>
      </Appear>
      <Appear>
        <Text size={3} textColor="secondary">
          How the browser and JS engines work
        </Text>
      </Appear>
    </Slide>
  </SlideSet>
);
