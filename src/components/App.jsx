import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [userIsRegistered, setRegistration] = useState(false);
  
  function swap() {
    setRegistration(!userIsRegistered);
  };
  
  return (
    <div className="container">
      <Form 
        isRegistered= {userIsRegistered}
      />
      <button className="form" onClick={swap}>{
        userIsRegistered ? "New User?" : "Existing User?"
      }</button>
    </div>
  );
}

export default App;
