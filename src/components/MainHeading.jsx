import React from "react";

function MainHeading() {
  var headingGreeting;
  var headingColor;
  const date = new Date();
  const hour = date.getHours();

  //change the heading color and greeting based off of the hour
  if (hour > 0 && hour < 12) {
    headingGreeting = "Good Morning";
    headingColor = { color: "red" };
  } else if (hour >= 12 && hour < 18) {
    headingGreeting = "Good Afternoon";
    headingColor = { color: "green" };
  } else {
    headingGreeting = "Good Evening";
    headingColor = { color: "blue" };
  }
  return <h1 style={headingColor}>{headingGreeting}</h1>;
}

export default MainHeading;
