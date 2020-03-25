import React, { Component } from "react";
import Award from "./award";
import awardService from "../services/awardService";

class Awards extends Component {
  state = {
    awards: []
  };

  componentDidMount() {
    const awards = awardService.getAwards();
    this.setState({ awards });
  }

  render() {
    return (
      <div className="container g-py-50">
        {this.state.awards.map(award => (
          <Award key={award.name} award={award} />
        ))}
      </div>
    );
  }
}

export default Awards;
