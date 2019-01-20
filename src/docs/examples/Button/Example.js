import React from "react";
import Button from "component-library/lib/Button";

export default function Example() {
  return (
    <div>
      <Button icon="check" label="I'm a button" raised accent />
      <br />
      <Button label="I'm a button" raised primary />
      <br />
      <Button icon="add" round mini accent />
    </div>
  );
}
