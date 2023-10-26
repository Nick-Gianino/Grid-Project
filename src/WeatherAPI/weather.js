import {useState} from 'react';
import widget from './widget';
import '../styles.css';

const Weather = (e) => {

    const [city, setCity] = useState("");
    const [response, setResponse] = useState([]);

    var baseUrl = `https://api.waqi.info/search/?token=0dc8ddea4f1ca3f0eb24b0d2cf0f652da4f2a7e7&keyword=${city}`

    const handleButtonClick = (e) => {
        // e.preventDefault();
        fetch(baseUrl)
            .then((response) => response.json())
            .then((json) =>  {
                setResponse(json.data);
            });
    }

   

    const handleItemClick = (data) => {
        setCity(data.station.name);
        handleButtonClick(e);
        
    }


    return (
        <div>
            <form>
                <label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="city-input"
                    
                    >
                    
                    </input>
                </label>
            </form>
            <button onClick={(e) => handleButtonClick(e)} >
                Get City
            </button>
            <p>{city}</p>
            <ul>
            {response.map((data, index) => (
                <li key = {index}
                onClick={(e) => handleItemClick(data)}
                >
                    {`Station Name: ${data.station.name}
                     \n AQI:${data.aqi}`}
                </li>
            ))}
             </ul>

            
        </div>
    );
};



export default Weather;