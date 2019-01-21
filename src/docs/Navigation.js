import React from "react";
import PropTypes from "prop-types";

// map over list of components, display anchor for each one
const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      <h3 className="navigation-header">Components</h3>
      {components.map(name => {
        return (
          <li className="navigation-item" key={name}>
            <a href={`#${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
