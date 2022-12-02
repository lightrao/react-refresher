// ./components/GoalList.js
import React from "react";

//css are applied globally to your entire page
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      <li>{props.goals[0].text}</li>
      <li>{props.goals[1].text}</li>
      <li>{props.goals[2].text}</li>
      <li>{props.goals[3].text}</li>
    </ul>
  );
};

export default GoalList;
