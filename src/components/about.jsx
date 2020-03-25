import React from "react";

const About = () => {
  return (
    <section className="container g-pt-60 g-pb-40">
      <figure className="row">
        <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 g-mb-30">
          <div className="text-center u-block-hover u-shadow-v1-5 g-line-height-2 g-pa-15">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/dtgitfbtp/image/upload/q_auto,f_auto,g_custom,c_fill,w_400,h_400,dpr_2.0/adam"
              alt="Adam Martin"
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-between g-mb-10">
            <div className="g-mb-20">
              <h4 className="h5 g-mb-5">Adam T. Martin</h4>
              <em className="d-block g-font-style-normal g-font-size-default text-uppercase g-color-primary">Photographer</em>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item g-mx-2">
                <a
                  className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle"
                  href="https://www.facebook.com/amuwp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                  <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item g-mx-2">
                <a
                  className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle"
                  href="https://www.instagram.com/adammartinphotography/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                  <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item g-mx-2">
                <a
                  className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle"
                  href="https://www.linkedin.com/in/adam-martin-81944811/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                  <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="g-mb-50">
            <p>
              Adam is a freelance software developer and underwater photographer born in Los Angeles, California. He grew up in the waves, and in his
              late 20s, after going to school for a Masters Degree in Computer Science, that love for the ocean developed into a love for diving and
              underwater photography. His favorite subjects are wildlife and wild places, trying to capture inspiring images, often in challenging
              conditions. Using ultra wide-angle photography, Adam captures dramatic scenes to try and convey the story and sense of adventure behind
              each image.
            </p>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default About;
