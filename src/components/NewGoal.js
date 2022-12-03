// ./components/NewGoal.js
import React from "react";
import "./NewGoal.css";

const NewGoal = () => {
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: "A new goal!",
    };
    console.log("onSubmit trigger addGoal Handler:", newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
