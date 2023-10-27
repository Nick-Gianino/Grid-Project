import { useState, useEffect } from 'react';
import Widget from './Widget';
import '../styles.css';

const Weather = (e) => {

    const [city, setCity] = useState("");
    const [response, setResponse] = useState([]);

    useEffect(() => {
        var baseUrl = `https://api.waqi.info/search/?token=0dc8ddea4f1ca3f0eb24b0d2cf0f652da4f2a7e7&keyword=${city}`

        fetch(baseUrl)
            .then((response) => response.json())
            .then((json) =>  {
                setResponse(json.data);
            });
    }, [city]);

    const handleItemClick = (stationName) => {
        setCity(stationName);
    }

    return (
        <div className="relative mx-auto w-full text-center">
            <p className="mb-4 text-xl font-bold">Please enter a location</p>
            <form>
                <label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="city-input"
                    />
                </label>
            </form>

           <div className="grid grid-cols-4 gap-4">
            {response.map((data, index) => (
                 <Widget data={data} key={index} handleItemClick={handleItemClick}/>
            ))}
            </div>

        </div>
    );
};

export default Weather;
