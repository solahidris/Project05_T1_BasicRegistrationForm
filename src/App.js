import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const firstNameHandler = (event) => {
    const firstName = event.target.value;
    setUserFirstName(firstName);
  };
  const lastNameHandler = (event) => {
    const lastName = event.target.value;
    setUserLastName(lastName);
  };
  const emailHandler = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="projectTitle">
          build a basic registration form in React where users can enter first
          name, last name, and email. Post-registration, an error message is
          displayed for each field if validation fails else a success message is
          shown.
        </p>
        <p>this is the userFirstName value = {userFirstName}</p>
        <input
          type={"text"}
          value={userFirstName}
          onChange={firstNameHandler}
        />
        <p>this is the userLastName value = {userLastName}</p>
        <input
          type={"text"}
          value={userLastName}
          onChange={lastNameHandler}
        />
        <p>this is the email value = {userEmail}</p>
        <input
          type={"email"}
          value={userEmail}
          onChange={emailHandler}
        />
        <p>----</p>
        <button onClick={()=>{console.log([userFirstName, userLastName, userEmail])}}>submit</button>
        <p className="projectTitle">
          build a basic registration form in React where users can enter first
          name, last name, and email. Post-registration, an error message is
          displayed for each field if validation fails else a success message is
          shown.
        </p>
      </header>
    </div>
  );
}

export default App;
