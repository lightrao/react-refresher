// ./components/GoalList.js
import React from "react";
import "./GoalList.css"; //css are applied globally to your entire page

const GoalList = () => {
  return (
    <ul className="goal-list">
      <li>Learn Javascript</li>
      <li>Learn React</li>
      <li>Learn Redux</li>
      <li>Help others in course Q&A</li>
    </ul>
  );
};

export default GoalList;
