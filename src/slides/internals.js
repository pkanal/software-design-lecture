import React from "react";
import { SlideSet, Slide, Heading, Text, Image, Appear } from "spectacle";
import CodeSlide from "spectacle-code-slide";

import { Embed } from "../components/embed";

const images = {
  browserHighLevelFlow: require("../assets/high-level-browser-flow.svg"),
  cssParser: require("../assets/css-parser.png"),
  jsToMachineCode: require("../assets/js-to-machine-code.svg"),
  htmlParsingGif: require("../assets/html-parsing-gif.gif")
};

const codeExamples = {
  badHtml: require("raw-loader!../assets/code/bad-html.example"),
  badHtmlParsed: require("raw-loader!../assets/code/bad-html-parsed.example"),
  badHtmlJs: require("raw-loader!../assets/code/js-html-bad.example"),
  goodHtmlJs: require("raw-loader!../assets/code/js-html-good.example"),
  dynamicTypes: require("raw-loader!../assets/code/dynamic-types.example"),
  staticTypes: require("raw-loader!../assets/code/static-types.example")
};

export const internalsSlides = (
  <SlideSet>
    <Slide>
      <Heading fit>🚒 ⚙️Browser and JS Engine Internals ⚙️ 🚒</Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        HTML, CSS & the DOM
      </Heading>
    </Slide>
    <Slide bgColor="white">
      <Heading fit textColor="secondary">
        Browser High Level Flow
      </Heading>
      <Image src={images.browserHighLevelFlow} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Parsing HTML
      </Heading>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        JavaScript & HTML: Forgiveness by default
      </Text>
    </Slide>
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="html"
      code={codeExamples.badHtml}
      ranges={[{ loc: [0, 2], title: "You can write HTML like this" }]}
      showLineNumbers={false}
    />
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="html"
      code={codeExamples.badHtmlParsed}
      ranges={[{ loc: [0, 7], title: "It will get parsed" }]}
      showLineNumbers={false}
    />

    <Slide>
      <Heading fit textColor="secondary">
        script, link and style tags
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Will halt the parser
        </Text>
      </Appear>

      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Network Latency
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          link & style can halt JavaScript execution
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        script tags at the bottom
      </Heading>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          HTML can parse uninterrupted
        </Text>
      </Appear>
      <Appear>
        <Text textAlign="left" padding="10" textColor="tertiary">
          Defer async
        </Text>
      </Appear>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.htmlParsingGif} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Parsing CSS
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading textColor="secondary">CSSOM</Heading>
      <Image src={images.cssParser} />
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Render Tree
      </Heading>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        It's actually 4 trees
      </Heading>
      <Text textAlign="left" padding="10" textColor="tertiary">
        RenderObjects
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        RenderStyles
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        RenderLayers
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Line Boxes
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Layout
      </Heading>
    </Slide>
    <Slide>
      <Embed url="https://www.youtube.com/embed/ZTnIxIA5KGw" />
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Traverse render tree
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Node position and size
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Layout for children
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Batched layout
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Immediate re-layout
      </Heading>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Font-size change
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Browser resize
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Accessing properties via JS
      </Text>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        If you are altering the DOM with JavaScript, help the browser out and
        write it as reads and then writes
      </Text>
    </Slide>
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="js"
      code={codeExamples.badHtmlJs}
      ranges={[{ loc: [0, 5] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="js"
      code={codeExamples.goodHtmlJs}
      ranges={[{ loc: [0, 5] }]}
      showLineNumbers={false}
    />
    <Slide>
      <Heading fit textColor="secondary">
        Paint
      </Heading>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Bitmap for each layer
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Bitmap uploaded to the GPU as texture
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Puts textures together for a final image
      </Text>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Inline critical CSS
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        JavaScript
      </Heading>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        JavaScript is dynamically typed
      </Text>
    </Slide>
    <Slide>
      <Heading fit textColor="secondary">
        Just in time (JIT) compilation
      </Heading>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Generate code during runtime, not ahead of time
      </Text>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        JS Engines have two compilers, baseline and optimizing
      </Text>
    </Slide>
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        Recompile regularly used functions with information from previous
        execution
      </Text>
      <Text textAlign="left" padding="10" textColor="tertiary">
        De-optimize if the type has changed
      </Text>
    </Slide>
    <Slide bgColor="tertiary">
      <Image src={images.jsToMachineCode} />
    </Slide>
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="js"
      code={codeExamples.dynamicTypes}
      ranges={[{ loc: [0, 6] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      bgColor="secondary"
      color="white"
      lang="js"
      code={codeExamples.staticTypes}
      ranges={[{ loc: [0, 6] }]}
      showLineNumbers={false}
    />
    <Slide>
      <Text textAlign="left" padding="10" textColor="tertiary">
        The best think you can do for the JavaScript engine is write code like
        it's statically typed
      </Text>
    </Slide>
  </SlideSet>
);
