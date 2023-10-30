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

    const handleSubmit = (e) => {
        e.preventDefault();
    };
      
    const handleClearClick = () => {
        setCity("");
    };

    return (
        <div className="relative rounded-md p-4 mx-auto w-auto flex flex-col justify-start items-center">
            <p className="mb-4 text-xl font-bold">Please enter a location</p>
            <div className="text-center flex items-center justify-center w-full">
                
                <form>
                    <label onSubmit={handleSubmit}>
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="b-12"
                            id="city-input"
                        />
                    </label>
                </form>

                <button className="ml-2 bg-black text-white"
                    onClick={handleClearClick}
                    >
                    Clear
                </button>
            </div>

            <div className="grid grid-cols-4 gap-4 p-4">
                {response.map((data, index) => (
                    <Widget data={data} key={index} handleItemClick={handleItemClick}/>
                ))}
            </div>

            <div>
                
            </div>

        </div>
    );
};

export default Weather;
