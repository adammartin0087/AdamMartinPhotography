import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Award from "../../components/award";
import awardService from "../../services/awardService";
import TitleBar from "../../components/common/title-bar";
import Head from "../../components/common/head";

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
      <div className="row">
        <Head title="Awards" />
        <TitleBar title="Awards">
          <Breadcrumb.Item active>Awards</Breadcrumb.Item>
        </TitleBar>

        <div className="container">
          {this.state.awards.map((award) => (
            <Award key={award.name} award={award} />
          ))}
        </div>
      </div>
    );
  }
}

export default Awards;
