import React from "react";

const DummyChart = () => (
  <div>
    <h2>Chart Title</h2>
    <svg width="400" height="200">
      {/* Код для отображения диаграммы */}
      <circle cx="50" cy="50" r="40" fill="red" />
      <circle cx="150" cy="50" r="40" fill="blue" />
      <circle cx="250" cy="50" r="40" fill="green" />
    </svg>
  </div>
);

export default DummyChart;
