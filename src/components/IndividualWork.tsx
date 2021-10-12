import React, { useEffect, useState } from "react";
import { ponea, saf } from "../Data/WorkList";

import Box from "@mui/material/Box";
import Card from "./UI/Card";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import classes from "./Assets/individualwork.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface JobDone {
  currentYr: Date;
}

const IndividualWork: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [endDate, setEndDate] = useState<JobDone>({
    currentYr: new Date(),
  });
  useEffect(() => {
    setEndDate((prevState) => {
      return {
        ...prevState,
        currentYr: new Date(),
      };
    });
  }, []);

  console.log(saf, "-", ponea);

  const safStart = new Date("08/01/2021");
  const upworkStart = new Date("05/01/2017");
  const poneaStart = new Date("02/01/2021");
  const poneaEnd = new Date("08/30/2021");
  const yrsSaf = endDate.currentYr.getFullYear() - safStart.getFullYear();
  const mnthsSaf = endDate.currentYr.getMonth() - safStart.getMonth() + 1;
  const monthsPonea = poneaEnd.getMonth() - poneaStart.getMonth() + 1;
  const monthsUpwork = poneaEnd.getMonth() - poneaEnd.getMonth() + 1;
  const yrsUpwork = poneaEnd.getFullYear() - upworkStart.getFullYear();

  return (
    <section className={classes.jobs}>
      <Modal
        open={open}
        onMouseOut={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Some more details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Extra job details
          </Typography>
        </Box>
      </Modal>
      <div className={classes.jobs_section}>
        <Card>
          <ul onMouseOver={handleOpen}>
            <h4>Software Developer</h4>
            <span>
              Bespoke Interactive LTD . Jan 2018
              {" - "}
              Aug 2019
              {" : "}1 yr and 8 months{" "}
            </span>
          </ul>
        </Card>
        <Card>
          <ul>
            <h4>Frontend Web Developer</h4>
            <span>
              Ponea Health LTD .{" "}
              {poneaStart.toLocaleString("default", { month: "short" })}
              {" - "}
              {poneaEnd.toLocaleString("default", { month: "short" })}{" "}
              {poneaEnd.getFullYear()}
              {" : "}
              {monthsPonea}
              months{" "}
            </span>
          </ul>
        </Card>
        <Card>
          <ul>
            <h4>Data/Web Specialist</h4>
            <span>
              Upwork .{" "}
              {upworkStart.toLocaleString("default", { month: "short" })}{" "}
              {upworkStart.getFullYear()}
              {" - "}
              {poneaEnd.toLocaleString("default", { month: "short" })}{" "}
              {poneaEnd.getFullYear()}
              {" : "}
              {yrsUpwork} yrs and {monthsUpwork} month{" "}
            </span>
          </ul>
        </Card>
      </div>
      <div className={classes.jobs_section}>
        <Card>
          <ul>
            <h4>Software Developer</h4>
            <span>Fleetcon Logistics . Nov - Feb 2020 : 4 months </span>
          </ul>
        </Card>
        <Card>
          <ul>
            <h4>Intern</h4>
            <span>
              Mother and Child TV . Aug 2017
              {" - "}
              Nov 2017
              {" : "}4 months{" "}
            </span>
          </ul>
        </Card>
      </div>
      <Card>
        <ul>
          <h4>
            Product Development Engineer<i> (current)</i>
          </h4>

          <span>
            Safaricom PLC .{" "}
            {safStart.toLocaleString("default", { month: "short" })}{" "}
            {safStart.getFullYear()} : {yrsSaf}
            yrs and {mnthsSaf} months{" "}
          </span>
        </ul>
      </Card>
    </section>
  );
};

export default IndividualWork;
