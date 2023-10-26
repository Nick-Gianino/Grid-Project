import MainTitle from "./MainTitle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles.css';
import ContainerQuery from "./ContainerQuery/ContainerQuery";
import MainGrid from "./MainGrid";

function App() {




  return (
    <Router>
      <div className="App">

        <div className="Container">

              <div className = "Title-Container">
                <MainTitle />
              </div>

            <div className = "main-grid">
              <MainGrid />
            </div>

        </div>
      
      </div>
    </Router>
  );
}

export default App;
