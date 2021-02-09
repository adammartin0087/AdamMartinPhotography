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

  async componentDidMount() {
    const awards = await awardService.getAwards();
    this.setState({ awards });
  }

  render() {
    return (
      <div className="row">
        <Head title="Awards" image="sunset-silkies" location={this.props.location} />
        <TitleBar title="Awards">
          <Breadcrumb.Item active>Awards</Breadcrumb.Item>
        </TitleBar>

        <div className="container">
          {this.state.awards.map((award) => (
            <Award key={award.Name} award={award} />
          ))}
        </div>
      </div>
    );
  }
}

export default Awards;
