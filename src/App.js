// ./App.js
import React, { useState } from "react";

// component start with an uppercase character
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

// styles are always applied globally
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Learn Javascript" },
    { id: "cg2", text: "Learn React" },
    { id: "cg3", text: "Learn Redux" },
    { id: "cg4", text: "Help others in course Q&A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
