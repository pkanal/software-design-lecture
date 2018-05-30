import React from "react";
import { SlideSet, Slide, Heading, Text, Appear, Link } from "spectacle";

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading fit>🍦 🤖 Software Design & Web Dev 🤖 🍦</Heading>
    </Slide>
    <Slide>
      <Text padding="10">Purvi Kanal</Text>
      <Text textAlign="left" padding="10">
        <Link href="https://github.com/pkanal">
          💻 Github: github.com/pkanal
        </Link>
      </Text>
      <Text textAlign="left" padding="10">
        <Link href="https://twitter.com/purvikanal">
          🐧 Twitter: twitter.com/purvikanal
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        What do we care about?
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Working software
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          User experience
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Developer experience
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading size={3} textColor="secondary">
        What do we need consider when we design apps?
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          System Architecture
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Code Patterns
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Environment the app runs in
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading size={3} textColor="secondary">
        Specifically though...
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Web App Architecture
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Codebase structure
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          How the browser and JS engines work
        </Text>
      </Appear>
    </Slide>
  </SlideSet>
);
