import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Timeout for clearing message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 3000); // clear message after 3 seconds
    return () => clearTimeout(timer);
  }, [successMessage]);

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

  // validate fields and set error state
  const validateFields = () => {
    const firstNameError = userFirstName.length < 5;
    const lastNameError = userLastName.length < 5;
    const emailError = !/\S+@\S+\.\S+/.test(userEmail);

    setErrors({
      userFirstName: firstNameError,
      userLastName: lastNameError,
      userEmail: emailError,
    });

    if (firstNameError || lastNameError || emailError) {
      return false;
    } else {
      return setSuccessMessage("VALIDATION SUCCESSFUL!");
    }
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
        <p>-----------------------------------</p>
        <div>
          <span className="textBeforeBox">First Name: </span>
          <input
            type={"text"}
            value={userFirstName}
            onChange={firstNameHandler}
            // onBlur={validateFields}
          />
          {errors.userFirstName && <span> First Name ERROR!</span>}
        </div>
        <label>
          <span className="textBeforeBox">Last Name: </span>
          <input
            type={"text"}
            value={userLastName}
            onChange={lastNameHandler}
            // onBlur={validateFields}
          />
          {errors.userLastName && <span> Last Name ERROR!</span>}
        </label>
        <label>
          <span className="textBeforeBox">Email: </span>
          <input
            type={"email"}
            value={userEmail}
            onChange={emailHandler}
            // onBlur={validateFields}
          />
          {errors.userEmail && <span> Email ERROR!</span>}
        </label>
        <div className="submitButton">
          {successMessage && <p className="successMessage">{successMessage}</p>}
          <button onClick={validateFields}> submit </button>
        </div>
      </header>
    </div>
  );
}

export default App;
