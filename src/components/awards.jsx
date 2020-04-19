import React, { Component } from "react";
import Award from "./award";
import awardService from "../services/awardService";
import { Row, Container } from "react-bootstrap";

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
      <Row>
        <Container>
          {this.state.awards.map(award => (
            <Award key={award.name} award={award} />
          ))}
        </Container>
      </Row>
    );
  }
}

export default Awards;
