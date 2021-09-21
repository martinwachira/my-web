import React, { useEffect, useState } from "react";

import Card from "./UI/Card";
import classes from "./Assets/individualwork.module.css";

interface JobDone {
  currentYr: Date;
}

const IndividualWork: React.FC = () => {
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

  const safStart = new Date("08/01/2021");
  const poneaStart = new Date("02/01/2021");
  const poneaEnd = new Date("08/30/2021");
  const yrsSaf = endDate.currentYr.getFullYear() - safStart.getFullYear();
  const mnthsSaf = endDate.currentYr.getMonth() - safStart.getMonth() + 1;
  const monthsPonea = poneaEnd.getMonth() - poneaStart.getMonth() + 1;

  return (
    <section className={classes.jobs}>
      <div className={classes.jobs_section}>
        <Card>
          <ul>
            <h4>Product Development Engineer</h4>
            <span>
              Safaricom PLC .{" "}
              {safStart.toLocaleString("default", { month: "short" })}{" "}
              {safStart.getFullYear()} : {yrsSaf}
              yrs and {mnthsSaf} months{" "}
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
      </div>
      <div className={classes.jobs_section}>
        <Card>
          <ul>
            <h4>Product Development Engineer</h4>
            <span>
              Safaricom PLC .{" "}
              {safStart.toLocaleString("default", { month: "short" })}{" "}
              {safStart.getFullYear()} : {yrsSaf}
              yrs and {mnthsSaf} months{" "}
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
      </div>
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
    </section>
  );
};

export default IndividualWork;
