import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}. My message is ${data.msg}.`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="form-group mt-2">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="enter your name"
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlInput1">Phone No.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                  ></textarea>
                </div>
                <div className="col-12 mt-3">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit Form
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
