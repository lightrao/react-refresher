// ./components/GoalList.js
import React from "react";

//css are applied globally to your entire page
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
      {/* {[<li key={"hello"}>Hello</li>, <li key={"world"}>World!</li>]} */}
    </ul>
  );
};

export default GoalList;
