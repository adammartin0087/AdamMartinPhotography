import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ShadowImage from "../../components/common/shadow-image";
import TitleBar from "../../components/common/title-bar";
import Head from "../../components/common/head";

const About = ({ location }) => {
  return (
    <div className="row">
      <Head title="About" image="Adam" location={location} />
      <TitleBar title="About">
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </TitleBar>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <ShadowImage src="Adam" aspectRatio="1:1" alt="Adam Martin" />
          </div>
          <div className="col-md-8">
            <h2>Adam T. Martin</h2>
            <p>
              Adam is a freelance software developer and underwater photographer born in Los Angeles, California. He grew up in the waves, and in his
              late 20s, after going to school for a Masters Degree in Computer Science, that love for the ocean developed into a love for diving and
              underwater photography. His favorite subjects are wildlife and wild places, trying to capture inspiring images, often in challenging
              conditions. Using ultra wide-angle photography, Adam captures dramatic scenes to try and convey the story and sense of adventure behind
              each image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
