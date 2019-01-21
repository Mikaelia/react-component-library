import React from "react";

import IconButton from "component-library/lib/IconButton";

/** Icon Buttons */
export default function ExampleButtons() {
  return (
    <div style={styles}>
      <IconButton icon="favorite" accent />
      <IconButton icon="add" primary />
    </div>
  );
}

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
