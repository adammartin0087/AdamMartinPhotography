import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import Helmet from "react-helmet";
import { Breadcrumb } from "react-bootstrap/";
import Award from "../../components/award";
import awardService from "../../services/awardService";
import TitleBar from "../../components/common/title-bar";

class Awards extends Component {
  state = {
    awards: [],
  };

  componentDidMount() {
    const awards = awardService.getAwards();
    this.setState({ awards });
  }

  render() {
    return (
      <Row>
        <Helmet>
          <title>Awards</title>
        </Helmet>
        <TitleBar title="Awards">
          <Breadcrumb.Item active>Awards</Breadcrumb.Item>
        </TitleBar>

        <Container>
          {this.state.awards.map((award) => (
            <Award key={award.name} award={award} />
          ))}
        </Container>
      </Row>
    );
  }
}

export default Awards;
