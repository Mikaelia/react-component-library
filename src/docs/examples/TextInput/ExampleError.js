import React from "react";
import TextInput from "component-library/TextInput";

/** Error TextBox */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-error"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required"
      />
    );
  }
}
