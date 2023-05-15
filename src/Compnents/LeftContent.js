import React from "react";
import { Addfree, BookSvg, Live, Scholarship, Time } from "../Icons/Icons";

const LeftContent = () => {
  return (
    <section className="left-content">
      <div>
        <p className="head-one">Access curated courses worth</p>
        <p className="head-one">
          <s>
            <span>₹18,500</span>
          </s>{" "}
          at just <span>₹ 99</span> per year
        </p>
      </div>
      <div className="dis">
        <BookSvg />
        <p>
          <span>100+</span>Job relevant courses
        </p>
      </div>
      <div className="dis">
        <Time />
        <p>
          <span>20,000+</span> Hours of content
        </p>
      </div>
      <div className="dis">
        <Live />
        <p>
          <span>Exclusive</span> webinar access
        </p>
      </div>
      <div className="dis">
        <Scholarship />
        <p>
          Scholarship worth <span>₹94,500</span>
        </p>
      </div>
      <div className="dis">
        <Addfree />
        <p>
          <span>Ad Free </span>learning experience
        </p>
      </div>
    </section>
  );
};

export default LeftContent;
