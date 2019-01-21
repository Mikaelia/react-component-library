import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // holding first segment of the URL in state
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }

  render() {
    const { route } = this.state;
    // Route in URL should match the component's name, else display first
    // component in list
    const component = route
      ? componentData.filter(component => component.name === route)[0]
      : componentData[0];

    return (
      <div className="docs">
        <Header />
        <Navigation
          components={componentData.map(component => component.name)}
        />
        <ComponentPage component={component} />
      </div>
    );
  }
}
