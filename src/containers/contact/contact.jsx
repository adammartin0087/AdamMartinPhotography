import React from "react";
import Helmet from "react-helmet";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TitleBar from "../../components/common/title-bar";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <TitleBar title="Contact">
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </TitleBar>
        <div className="container">
          <p className="mb-5">Thank you for your interest. Please fill out the contact form below:</p>

          <form>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" autoComplete="off" required maxLength="50" className="form-control" />
                </div>
                <div>
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" autoComplete="off" required maxLength="50" className="form-control" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" autoComplete="off" required maxLength="50" className="form-control" />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" autoComplete="off" required maxLength="50" className="form-control" />
                </div>
              </div>
              <div className="col-md-7">
                <div>
                  <label htmlFor="question">Question</label>
                  <textarea
                    id="question"
                    autoComplete="off"
                    required
                    maxLength="500"
                    rows="12"
                    placeholder="Type your message here..."
                    className="form-control"
                  />
                </div>
                <div className="text-right">
                  <button className="btn btn-sm btn-primary text-uppercase mt-2" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
