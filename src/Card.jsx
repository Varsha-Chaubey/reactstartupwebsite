import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} alt="card-img" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
                {props.title}
            </h5>
            <p className="card-text">
                {props.para}
            </p>
            <h6><b>Check the link to get started</b></h6>
            <a href={props.link} target="_blank" className="btn btn-primary">Check Link</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
