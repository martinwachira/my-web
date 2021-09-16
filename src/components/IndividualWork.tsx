import React, { useEffect, useState } from "react";

import Card from "./UI/Card";
import classes from "./Assets/individualwork.module.css";

interface JobDone {
  currentYr: Date;
}

const IndividualWork: React.FC = () => {
  const [startDate, setStartDate] = useState<JobDone>({
    currentYr: new Date(),
  });
  useEffect(() => {
    setStartDate((prevState) => {
      return {
        ...prevState,
        currentYr: new Date(),
      };
    });
  }, []);

  const safStart = new Date("08/01/2021");
  const yrsSaf = startDate.currentYr.getFullYear() - safStart.getFullYear();
  const mnthsSaf = startDate.currentYr.getMonth() - safStart.getMonth() + 1;

  return (
    <section className={classes.jobs}>
      <div className={classes.jobs_section}>
        <Card>
          <ul>
            <h4>Product Development Engineer</h4>
            <span>
              Safaricom PLC .{" "}
              {safStart.toLocaleString("default", { month: "short" })}{" "}
              {safStart.getFullYear()} - {yrsSaf}
              yrs and {mnthsSaf}
              months{" "}
            </span>
          </ul>
        </Card>
        <Card>
          <ul>
            <h4>Product Development Engineer</h4>
            <span>
              Safaricom PLC .{" "}
              {safStart.toLocaleString("default", { month: "short" })}{" "}
              {safStart.getFullYear()} - {yrsSaf}
              yrs and {mnthsSaf}
              months{" "}
            </span>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default IndividualWork;
