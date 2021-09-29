import React, { useState } from "react";

import classes from "./Assets/contact.module.css";
import { postRemarks } from "../api/ContactsApi";
import uniClasses from "./Assets/universal.module.css";

const Contact: React.FC = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    remarks: "",
  });

  const inputCHangeHandler = (e: any) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    const remarksObj = {
      name: state.name,
      address: state.address,
      remarks: state.remarks,
    };

    setState({
      name: "",
      address: "",
      remarks: "",
    });
    console.log("name ref", remarksObj);
    postRemarks(remarksObj);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={uniClasses["about-content"]}>
          <h2>Contact</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={inputCHangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="address"
            value={state.address}
            onChange={inputCHangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            name="remarks"
            value={state.remarks}
            onChange={inputCHangeHandler}
          ></textarea>
        </div>
        <button>Send your Remarks</button>
      </div>
    </form>
  );
};

export default Contact;
