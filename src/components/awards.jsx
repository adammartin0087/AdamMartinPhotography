import React, { Component } from "react";
import Award from "./award";
import awardService from "../services/awardService";
import Container from "react-bootstrap/Container";

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
      <Container>
        {this.state.awards.map(award => (
          <Award key={award.name} award={award} />
        ))}
      </Container>
    );
  }
}

export default Awards;
