import {useState, React} from 'react';
import ContainerQuery from '../ContainerQuery/ContainerQuery';
import ToDoList from '../ToDoList/ToDoList';
import Weather from '../WeatherAPI/weather';
import GridButton from './GridButton';
import '../styles.css';

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

    const buttonList = [
        { text: 'Container Querys', component: 'ContainerQuery' },
        { text: 'To Do List', component: 'ToDoList' },
        { text: 'Weather API', component: 'WeatherAPI' },
      ];

    return (
        <>
        <div className = "h-screen w-screen flex justify-center"> 
            {showButtons ? (
                    <div className="grid grid-cols-3 grid-rows-auto gap-5  place-items-center">
                        {buttonList.map((button, index) =>
                        <GridButton 
                            key={index} 
                            buttonProps={{ 
                            text: button.text,
                            onClick: () => handleButtonClick(button.component)
              }} 
            /> 
          )}
        </div>
            ) : (
                <div >
                    
                    {currentEvent === 'ContainerQuery' && <ContainerQuery /> }
                    {currentEvent === 'ToDoList' && <ToDoList />}
                    {currentEvent === 'WeatherAPI' && <Weather />}

                    <button className = "fixed top-10 left-5 rounded-full h-[3vh] w-[5vw] bg-black text-white" onClick={handleHomeClick}>
                        Home
                    </button >
                </div>
                
            )
        }
        </div>
        </>
        
    );
};

export default MainGrid;