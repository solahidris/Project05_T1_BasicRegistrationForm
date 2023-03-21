import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='projectTitle'>
          build a basic registration form in React where users can enter first name, last name, and email. Post-registration, an error message is displayed for each field if validation fails else a success message is shown.
        </p>
      </header>
    </div>
  );
}

export default App;
