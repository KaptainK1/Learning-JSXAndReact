import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   //What to show
//   <div>
//     <h1>My Pets!</h1>
//     <ul>
//       <li>Ares</li>
//       <li>Daisy</li>
//       <li>Lily</li>
//     </ul>
//   </div>,
//   //where to show it
//   document.getElementById("root")
// );
const name = "Dylan";
const lastInitial = "H";
const luckyNumber = 8;
const randomImage = "https://picsum.photos/200";
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

ReactDOM.render(
  <div>
    <h1
      className="heading"
      style={headingColor}
      contentEditable="true"
      spellCheck="false"
    >
      {headingGreeting} {name} {lastInitial}!
    </h1>
    <img
      className="mainPictures"
      alt="King Charles Cavalier Tri-Color"
      src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-30/Are+Cavalier+King+Charles+Spaniels+Hyper+_+Breed+Facts+_+ASPCA+Pet+Health+Insurance+_+cavalier+king+Charles+spaniel+puppy+eating+a+treat-min.jpg"
    />
    <img
      className="mainPictures"
      alt="King Charles Cavalier Blenheim"
      src="https://media.istockphoto.com/photos/puppy-cavalier-king-charles-spaniel-dog-picture-id1154945349?k=6&m=1154945349&s=612x612&w=0&h=SB_RERlHSic2COG6znnEQ18svXRShzK_XxJTWGuGUqs="
    />
    <img
      className="mainPictures"
      alt="black cat"
      src="data:image/jpeg;base64,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"
    />

    <img src={randomImage} alt="random" />
    <img src={randomImage + "?grayscale"} alt="grayscale random" />
    <p>My lucky number is {luckyNumber}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,

  document.getElementById("root")
);
