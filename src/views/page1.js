import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <Link to="/">返回主页</Link>
      <div>这是Page1</div>
    </div>
  );
};

export default Page1;
