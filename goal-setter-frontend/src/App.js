import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Register from "./Register";
import Login from './Login';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (forName) => {
        setCurrentForm(forName);
    }


  return (
    <div className="App">
        {
            currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
      {/*<Register />;*/}

    </div>
  );
}

export default App;
