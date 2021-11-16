import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section className="d-flex align-items-center" id="header">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                  {props.name}
                    <strong className="brand-name"> Start-up </strong>
                  </h1>
                  <h2 className="my-3">
                    Lets make things together and explore the Tech world.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                     {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.image} alt="header-img" className="img-fluid animated" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
