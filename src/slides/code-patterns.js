import React from "react";
import {
  SlideSet,
  Slide,
  Heading,
  Text,
  Image,
  Appear,
  BlockQuote,
  Cite,
  Quote,
  S
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import { Embed } from "../components/embed";

const codeExamples = {
  multiplePurposeFunctions: require("raw-loader!../assets/code/multiple-purpose-functions.example"),
  singlePurposeFunctions: require("raw-loader!../assets/code/single-purpose-functions.example"),
  reactAbstraction: require("raw-loader!../assets/code/react-abstraction.example"),
  reactShouldAbstract: require("raw-loader!../assets/code/react-should-abstract.example")
};

const images = {
  separationOfConcerns: require("../assets/front-end-separation-concerns-specific.svg")
};

export const codePatternsSlides = (
  <SlideSet>
    <Slide>
      <Heading fit>Code Patterns</Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Single purpose functions
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <BlockQuote>
        <Quote>A class should have only one reason to change.</Quote>
        <Cite>Robert C. Martin</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        A <S type="bold">[function/component/service/unit of code]</S> should
        have only one reason to change.
      </Text>
    </Slide>
    <CodeSlide
      bgColor="secondary"
      color="white"
      code={codeExamples.multiplePurposeFunctions}
      lang="js"
      ranges={[{ loc: [0, 1], title: "Multiple Purpose Functions" }]}
      showLineNumbers={false}
    />
    <CodeSlide
      bgColor="secondary"
      color="white"
      code={codeExamples.singlePurposeFunctions}
      lang="js"
      ranges={[
        { loc: [0, 2], title: "Single Purpose Functions" },
        { loc: [3, 4] }
      ]}
      showLineNumbers={false}
    />
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Independantly testable
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Purpose is clear
      </Text>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading fit textColor="secondary">
        Fontend Separation of Concerns
      </Heading>
      <Image src={images.separationOfConcerns} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Abstraction
      </Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Some stuff you hear a lot
      </Heading>
      <Text textAlign="left" padding="10" textColor="tertiary">
        DRY - Dont Repeat Yourself!
      </Text>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Its actually okay to repeat yourself sometimes. Choosing when you need
        to abstract is hard.
      </Text>
    </Slide>
    <CodeSlide
      bgColor="secondary"
      color="white"
      code={codeExamples.reactAbstraction}
      lang="js"
      ranges={[
        { loc: [0, 10], title: "Cart Component" },
        { loc: [5, 6], title: "Format Price" }
      ]}
      showLineNumbers={false}
    />
    <CodeSlide
      bgColor="secondary"
      color="white"
      code={codeExamples.reactShouldAbstract}
      lang="js"
      ranges={[
        { loc: [0, 11], title: "Formatting the price in two places" },
        { loc: [12, 13], title: "Abstract the view logic" },
        { loc: [15, 25], title: "Price format is consistent everywhere" }
      ]}
      showLineNumbers={false}
    />
    <Slide>
      <Heading fit textColor="secondary">
        Some rules
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          The same thing needs to be done in multiple places
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          New complexity is being added to the functionality
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Base it on your experience instead of hard and fast rules
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Wait until it's at least a little annoying not to abstract
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Premature abstraction can lead to some really painful refactoring
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        What's in a name?
      </Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Exercise
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Embed url="https://codesandbox.io/embed/k28my20j6o" />
    </Slide>
  </SlideSet>
);
