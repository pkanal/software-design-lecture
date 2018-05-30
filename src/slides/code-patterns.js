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
  Quote
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
      <Heading caps fit>
        Code Patterns
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        Single purpose functions
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <BlockQuote>
        <Quote>A class should have only one reason to change.</Quote>
        <Cite>Robert C. Martin</Cite>
      </BlockQuote>
    </Slide>
    <Slide bgColor="secondary">
      <Text textColor="primary">
        A{" "}
        <Text textColor="tertiary">
          [function/component/service/unit of code]
        </Text>{" "}
        should have only one reason to change.
      </Text>
    </Slide>
    <CodeSlide
      code={codeExamples.multiplePurposeFunctions}
      lang="js"
      ranges={[{ loc: [0, 1], title: "Multiple Purpose Functions" }]}
      showLineNumbers={false}
    />
    <CodeSlide
      code={codeExamples.singlePurposeFunctions}
      lang="js"
      ranges={[
        { loc: [0, 2], title: "Single Purpose Functions" },
        { loc: [3, 4] }
      ]}
      showLineNumbers={false}
    />
    <Slide>
      <Text>Independantly testable</Text>
      <Text>Purpose is clear</Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        Fontend Separation of Concerns
      </Heading>
      <Image src={images.separationOfConcerns} />
    </Slide>
    <Slide>
      <Heading>Abstraction</Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        Some stuff you hear a lot
      </Heading>
      <Text>DRY - Dont Repeat Yourself!</Text>
    </Slide>
    <Slide>
      <Text>
        Its actually okay to repeat yourself sometimes. Choosing when you need
        to abstract is hard.
      </Text>
    </Slide>
    <CodeSlide
      code={codeExamples.reactAbstraction}
      lang="js"
      ranges={[{ loc: [0, 10] }, { loc: [5, 6] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      code={codeExamples.reactShouldAbstract}
      lang="js"
      ranges={[{ loc: [0, 11] }, { loc: [12, 13] }, { loc: [15, 25] }]}
      showLineNumbers={false}
    />
    <Slide>
      <Text>Base it on your experience instead of hard and fast rules</Text>
      <Text>Wait until it's at least a little annoying not to abstract</Text>
      <Text>
        Premature abstraction can lead to some really painful refactoring
      </Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        What's in a name?
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        Exercise
      </Heading>
    </Slide>
    <Slide>
      <Embed url="https://codesandbox.io/embed/k28my20j6o" />
    </Slide>
  </SlideSet>
);
