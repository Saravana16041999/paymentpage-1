import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const ContentCenter = () => {
  return (
    <div className="content-page">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default ContentCenter;
