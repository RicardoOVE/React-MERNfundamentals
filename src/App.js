import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import PersonCard from "./components/PersonCard/PersonCard";

class App extends React.Component {

  render() {

    return(
      <div className="container">
        <h1>Hello Dojo!</h1>
        <h2>This I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
        <FirstComponent />
        <PersonCard />
        <br></br>
        <PersonCard />
        <br></br>
        <PersonCard />
      </div>
    );
    
  }

}

export default App;

