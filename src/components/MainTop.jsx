import React from "react";
import Brand from "../photos/Brand.png";

const MainTop = () => {
  return (
    <div className="d-flex justify-content-center bg-secondary">
      <img className="py-3" src={Brand} style={{ width: "50%" }} />
    </div>
  );
};

export default MainTop;
