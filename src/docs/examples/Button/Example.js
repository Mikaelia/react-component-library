import React from "react";
import Button from "component-library/lib/Button/";

/** Standard Buttons */
export default function ExampleButtons() {
  return (
    <div style={styles}>
      <Button
        icon="check"
        href="https://github.com/Mikaelia"
        label="I'm a button"
        raised
        accent
      />
      <Button icon="check" label="I'm a button" flat />
      <Button label="I'm a button" raised primary />
    </div>
  );
}

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};
