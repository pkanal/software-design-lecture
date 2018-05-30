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
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import { Embed } from "../components/embed";

const images = {
  browserHighLevelFlow: require("../assets/high-level-browser-flow.svg"),
  cssParser: require("../assets/css-parser.png"),
  jsToMachineCode: require("../assets/js-to-machine-code.svg")
};

const codeExamples = {
  badHtml: require("raw-loader!../assets/code/bad-html.example"),
  badHtmlParsed: require("raw-loader!../assets/code/bad-html-parsed.example"),
  badHtmlJs: require("raw-loader!../assets/code/js-html-bad.example"),
  goodHtmlJs: require("raw-loader!../assets/code/js-html-good.example"),
  dynamicTypes: require("raw-loader!../assets/code/dynamic-types.example"),
  staticTypes: require("raw-loader!../assets/code/static-types.example")
};

export const underTheHoodSlides = (
  <SlideSet>
    <Slide>
      <Heading caps fit>
        Under the Hood
      </Heading>
    </Slide>
    <Slide>
      <Heading caps fit>
        HTML, CSS & the DOM
      </Heading>
    </Slide>
    <Slide>
      <Heading fit caps>
        Browser High Level Flow
      </Heading>
      <Image src={images.browserHighLevelFlow} />
    </Slide>
    <Slide>
      <Heading>Parsing HTML</Heading>
    </Slide>
    <Slide>
      <Text>JavaScript & HTML: Forgiveness by default</Text>
    </Slide>
    <CodeSlide
      lang="html"
      code={codeExamples.badHtml}
      ranges={[{ loc: [0, 2] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      lang="html"
      code={codeExamples.badHtmlParsed}
      ranges={[{ loc: [0, 7] }]}
      showLineNumbers={false}
    />

    <Slide>
      <Heading caps fit>
        <Code>script</Code>, <Code>link</Code> and <Code>style</Code> tags
      </Heading>
      <Text>Will halt the parser</Text>
      <Text>Network Latency</Text>
      <Text>link & style can halt JavaScript execution</Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        <Code>script</Code> tags at the bottom
      </Heading>
      <Text>HTML can parse uninterrupted</Text>
      <Text>Defer async </Text>
    </Slide>
    <Slide>Maybe funny HTML parsing gif here</Slide>
    <Slide>
      <Heading>Parsing CSS</Heading>
    </Slide>
    <Slide>
      <Heading>CSSOM</Heading>
      <Image src={images.cssParser} />
    </Slide>
    <Slide>
      <Heading>Render Tree</Heading>
    </Slide>
    <Slide>
      <Heading>It's actually like 4 trees</Heading>
      <Text>RenderObjects</Text>
      <Text>RenderStyles</Text>
      <Text>RenderLayers</Text>
      <Text>Line Boxes</Text>
    </Slide>
    <Slide>
      <Heading>Layout</Heading>
    </Slide>
    <Slide>
      <Embed url="https://www.youtube.com/embed/ZTnIxIA5KGw" />
    </Slide>
    <Slide>
      <Text>Traverse render tree</Text>
      <Text>Node position and size</Text>
      <Text>Layout for children</Text>
      <Text>Batched layout</Text>
    </Slide>
    <Slide>
      <Heading>Immediate re-layout</Heading>
      <Text>Font-size change</Text>
      <Text>Browser resize</Text>
      <Text>Accessing properties via JS</Text>
    </Slide>
    <Slide>
      <Text>
        If you are altering the DOM with JavaScript, help the browser out and
        write it as reads and then writes
      </Text>
    </Slide>
    <CodeSlide
      lang="js"
      code={codeExamples.badHtmlJs}
      ranges={[{ loc: [0, 5] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      lang="js"
      code={codeExamples.goodHtmlJs}
      ranges={[{ loc: [0, 5] }]}
      showLineNumbers={false}
    />
    <Slide>
      <Heading caps fit>
        Paint
      </Heading>
    </Slide>
    <Slide>
      <Text>Bitmap for each layer</Text>
      <Text>Bitmap uploaded to the GPU as texture</Text>
      <Text>Puts textures together for a final image</Text>
    </Slide>
    <Slide>
      <Text>Inline critical CSS</Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        JavaScript
      </Heading>
    </Slide>
    <Slide>
      <Text>JavaScript is dynamically typed</Text>
    </Slide>
    <Slide>
      <Heading caps fit>
        Just in time (JIT) compilation
      </Heading>
      <Text>Generate code during runtime, not ahead of time</Text>
    </Slide>
    <Slide>
      <Text>JS Engines have two compilers, baseline and optimizing</Text>
    </Slide>
    <Slide>
      <Text>
        Recompile regularly used functions with information from previous
        execution
      </Text>
      <Text>De-optimize if the type has changed</Text>
    </Slide>
    <Slide>
      <Image src={images.jsToMachineCode} />
    </Slide>
    <CodeSlide
      lang="js"
      code={codeExamples.dynamicTypes}
      ranges={[{ loc: [0, 6] }]}
      showLineNumbers={false}
    />
    <CodeSlide
      lang="js"
      code={codeExamples.staticTypes}
      ranges={[{ loc: [0, 6] }]}
      showLineNumbers={false}
    />
    <Slide>
      <Text>
        The best think you can do for the JavaScript engine is write code like
        it's statically typed
      </Text>
    </Slide>
  </SlideSet>
);
