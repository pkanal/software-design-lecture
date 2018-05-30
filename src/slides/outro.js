import React from "react";
import { SlideSet, Slide, Heading, Text, Link } from "spectacle";

export const outroSlides = (
  <SlideSet>
    <Slide>
      <Heading fit textColor="secondary">
        🤔 Q&A 🤔
      </Heading>
    </Slide>
    <Slide>
      <Text padding="10" textColor="tertiary">Purvi Kanal 🙎🏽</Text>
      <Text textColor="tertiary" textAlign="left" padding="10">
        <Link textColor="tertiary" href="https://github.com/pkanal">
          💻 Github: github.com/pkanal
        </Link>
      </Text>
      <Text textAlign="left" padding="10">
        <Link textColor="tertiary" href="https://twitter.com/purvikanal">
          🐧 Twitter: twitter.com/purvikanal
        </Link>
      </Text>
      <br />
      <Text textAlign="left" padding="10">
        <Link textColor="tertiary" href="http://bridgeschool.io">
          👩🏽‍🏫 Bridge School: Director of Software Development
        </Link>
      </Text>
      <Text textAlign="left" padding="10">
        <Link textColor="tertiary" href="https://rangle.io">
          👩‍💻 Rangle.io: Solutions Architect
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        🎉 Thanks 🎉
      </Heading>
    </Slide>
  </SlideSet>
);
