import React from "react";
import TextInput from "component-library/lib/TextInputBEM";

/** Error TextBox */
export default class ExampleErrorBEM extends React.Component {
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
