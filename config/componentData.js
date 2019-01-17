module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\nimport { PropTypes } from \"prop-types\";\n\n/** A super lame component that says Hello with a custom message. */\nfunction HelloWorld({ message }) {\n  return <div>Hello {message}</div>;\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: \"World\"\n};\n\nexport default HelloWorld;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from \"react\";\nimport HelloWorld from \"component-library/HelloWorld\";\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"Mikaela!\" />;\n}\n"}]}]