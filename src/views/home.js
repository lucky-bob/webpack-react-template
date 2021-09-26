import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>主页</h2>
      <ul>
        <li>
          <Link to="/page1">page1</Link>
        </li>
        <li>
          <Link to="/page2">page2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
