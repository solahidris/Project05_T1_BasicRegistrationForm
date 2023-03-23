import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
  });

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

  const validateFields = () => {
    const firstNameError = userFirstName.length < 5;
    const lastNameError = userLastName.length < 5;
    const emailError = !/\S+@\S+\.\S+/.test(userEmail);

    setErrors({
      userFirstName: firstNameError,
      userLastName: lastNameError,
      userEmail: emailError,
    });

    if (!(firstNameError || lastNameError || emailError)) {return}
    // else {<span>something SPAN</span>};
    // return !(firstNameError || lastNameError || emailError);
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
        <label>
          <p>UserFirstName = {userFirstName}</p>
          <input
            type={"text"}
            value={userFirstName}
            onChange={firstNameHandler}
            // onBlur={validateFields}
          />
          {errors.userFirstName && (
            <span> userFistName ERROR</span>
          )}
        </label>
        <label>
          <p>UserLastName = {userLastName}</p>
          <input
            type={"text"}
            value={userLastName}
            onChange={lastNameHandler}
            // onBlur={validateFields}
          />
          {errors.userLastName && <span> userLastName ERROR</span>}
        </label>
        <label>
          <p>UserEmail = {userEmail}</p>
          <input
          type={"email"}
          value={userEmail}
          onChange={emailHandler}
          // onBlur={validateFields}
          />
          {errors.userEmail && <span> userEmail ERROR</span>}
        </label>
        <p>----</p>
        <button
          onClick={(validateFields)}
        >
          submit
        </button>
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
