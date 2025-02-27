import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Template = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <h1 className="display-5 fw-bold">Hi, I'm Pakhre Roshan</h1>
            <p className="fs-5 text-secondary">
              A freelance web developer from India. I convert custom web designs
              into Bootstrap templates.
            </p>
            <p className="fs-5 text-secondary">
              I make YouTube videos and write blogs.
            </p>
            <button
              className="btn btn-primary fw-bold mt-4"
              style={{ borderRadius: "50px", padding: "10px 40px" }}
            >
              I'M AVAILABLE
            </button>
            <div className="icon mt-4 d-flex gap-3">
              <FaFacebook size={20} color="#6c757d" />
              <FaTwitter size={20} color="#6c757d" />
              <FaLinkedin size={20} color="#6c757d" />
              <FaGithub size={20} color="#6c757d" />
            </div>
          </div>
          <div className="col-6 text-center img-container">
            <img
              src="../src/image/portrait.png"
              alt="Pakhre Roshan Portrait"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
