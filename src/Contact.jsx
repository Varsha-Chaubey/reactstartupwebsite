import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    number: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const formSumbit = (e) => {
    e.preventDefault();
    alert(
      `Hey ${data.fullname}. Startup.. team welcomes you in our family. All the very best for your future, We'll email you for any other issue on your email address  ${data.email}. Thank you`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSumbit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your full name "
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={inputEvent}
                  placeholder="Enter your Contact number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12 mb-4">
                <button className="btn btn-outline-primary" type="submit">
                  Sumbit msg
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
