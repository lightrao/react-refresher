// ./App.js
import React from "react";
import GoalList from "./components/GoalList"; // component start with an uppercase character

import "./App.css"; // styles are always applied globally

const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

export default App;
