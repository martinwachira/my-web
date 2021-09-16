import React, { useEffect, useState } from "react";

import classes from "./Assets/universal.module.css";

interface JobDone {
  currentYr: Date;
}

const Work: React.FC = () => {
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

  console.log("years saf", yrsSaf);
  console.log("months saf", mnthsSaf);

  console.log();
  return (
    <>
      <div className={classes["about-content"]}>
        <h3>selected_work()</h3>
        <div style={{ color: "gray" }}>
          <h4>Product Development Engineer</h4>
          <span>
            Safaricom PLC .{" "}
            {safStart.toLocaleString("default", { month: "short" })}{" "}
            {safStart.getFullYear()} - {yrsSaf}
            yrs and {mnthsSaf}
            months{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Work;
