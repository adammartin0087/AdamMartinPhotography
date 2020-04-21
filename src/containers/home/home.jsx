import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { getImageUrl } from "../../services/galleryService";
import ShadowImage from "../../components/common/shadow-image";
import Banner from "./../../components/common/banner";

const Home = () => {
  const w = 600;
  const h = 432;

  return (
    <React.Fragment>
      <div className="row">
        <h1 className="d-none">Adam Martin Photography</h1>
        <Carousel>
          <Carousel.Item>
            <Banner src="Optimized/Crocodile-Sunset" title="American Crocodile - Jardines de la Reina, Cuba" />
          </Carousel.Item>
          <Carousel.Item>
            <Banner src="Optimized/Moorea" title="Moorea, French Polynesia" />
          </Carousel.Item>
          <Carousel.Item>
            <Banner src="Optimized/Fakarava-Reef" title="Fakarava, French Polynesia" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row mt-4">
        <div className="col-sm-6 col-lg-3">
          <Link to="/underwater" title="Underwater">
            <ShadowImage alt="Underwater" src={getImageUrl("Optimized/Humpbacks-Surfacing", w, h)} />
            <h2 className="tile">Underwater</h2>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link to="/pumas" title="Pumas">
            <ShadowImage alt="Pumas" src={getImageUrl("Optimized/Puma-Approaching", w, h)} />
            <h2 className="tile">Pumas</h2>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link to="/aerial" title="Aerial">
            <ShadowImage alt="Aerial" src={getImageUrl("Optimized/DarwinsArch", w, h)} />
            <h2 className="tile">Aerial</h2>
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link to="/landscape" title="Landscape">
            <ShadowImage alt="Landscape" src={getImageUrl("Optimized/Kirkjufell", w, h)} />
            <h2 className="tile">Landscape</h2>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
