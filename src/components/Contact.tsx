import React, { useRef } from "react";

import classes from "./Assets/contact.module.css";
import { postRemarks } from "../api/ContactsApi";
import uniClasses from "./Assets/universal.module.css";

// import TextField from "@mui/material/TextField";

const Contact: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const remarksRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (e: any) => {
    e.preventDefault();

    const remarks = {
      name: nameRef?.current?.value,
      address: addressRef?.current?.value,
      remarks: remarksRef?.current?.value,
    };
    console.log("name ref", remarks);

    postRemarks(remarks);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <div className={uniClasses["about-content"]}>
          <h2>Contact</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="remarks">Remarks</label>
          <textarea id="remarks" ref={remarksRef}></textarea>
        </div>
        {/* <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div> */}
        <button>Send your Remarks</button>
        {/* <TextField
        style={{ color: "white" }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
      /> */}
      </div>
    </form>
  );
};

export default Contact;
