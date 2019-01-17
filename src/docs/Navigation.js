import React from "react";
import PropTypes from "prop-types";

// map over list of components, display anchor for each one
const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map(name => {
        return (
          <li key={name}>
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
