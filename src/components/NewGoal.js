// ./components/NewGoal.js
import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  let enteredText = ""; // variable will not lead to UI rerender

  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    props.onAddGoal(newGoal);
    enteredText = ""; // this is not reflected on our input
  };

  const textChangeHandler = (event) => {
    enteredText = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
