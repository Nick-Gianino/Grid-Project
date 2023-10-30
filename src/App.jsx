import MainTitle from "./MainTitle";
import './styles.css';
import MainGrid from "./MainGrid/MainGrid";

function App() {




  return (
      <div className="App h-screen w-screen overflow-hidden">

        <div className = "bg-purple-500 h-[5vh] justfty-center text-center">
            <MainTitle />
        </div>

        <div className = "bg-black fill">
            <MainGrid />
        </div>
      
      </div>
  );
}

export default App;
