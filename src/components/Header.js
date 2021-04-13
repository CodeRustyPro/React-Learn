import "../App.css";
import React from "react";

const Header = () => {
  const [count, setcount] = React.useState(0);
  const Increment = () => {
    setcount(count + 1);
  };
  const Decrement = () => {
    setcount(count - 1);
  };
  return (
    <React.Fragment>
      <p>Count : {count} </p>
      <button onClick={Increment}>Like👍</button>
      <button onClick={Decrement}>Dislike👎</button>
    </React.Fragment>
  );
};

export default Header;
// This exports this file into a componenet which is used in App.js as <Header />
