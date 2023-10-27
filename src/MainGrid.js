import {useState, React} from 'react';
import ContainerQuery from './ContainerQuery/ContainerQuery';
import ToDoList from './ToDoList/ToDoList';
import Weather from './WeatherAPI/weather';
import './styles.css';

const MainGrid = () => {
    const [currentEvent, setEvent] = useState('');
    const [showButtons, setShowButtons] = useState(true);

    const handleButtonClick = (component) => {
        setEvent(component);
        setShowButtons(false);
    }

    const handleHomeClick = () => {
        setEvent('');
        setShowButtons(true);
    }

    return (
        <>
            {showButtons ? (
                <div className = "buttonContainer">
                    <button onClick={() => handleButtonClick('ContainerQuery')}>
                        Container Querys
                    </button> 
                    <button onClick={() => handleButtonClick ('ToDoList')}>
                        To Do List
                    </button>
                    <button onClick={(e) => handleButtonClick('WeatherAPI')}>
                        Weather API
                    </button>
                    
                </div>
            ) : (
                <div className = "buttonContainer">
                    <button className = "relative h-10 w-10 bg-gray-250" onClick={handleHomeClick}>
                        Home
                    </button >
                    {currentEvent === 'ContainerQuery' && <ContainerQuery /> }
                    {currentEvent === 'ToDoList' && <ToDoList />}
                    {currentEvent === 'WeatherAPI' && <Weather />}
                </div>
            )
        }
        </>
        
    );
};

export default MainGrid;