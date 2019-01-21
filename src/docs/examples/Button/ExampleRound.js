import React from "react";
import Button from "component-library/lib/Button/";

/** Round Buttons */
export default function ExampleButtons() {
  return (
    <div style={styles}>
      <Button icon="add" round mini accent />
      <Button icon="accessibility" round mini contrast />
      <Button icon="map" round primary />
    </div>
  );
}
const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around"
};
