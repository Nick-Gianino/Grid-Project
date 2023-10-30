import React from 'react';
import '../styles.css';

const Widget = ({data, handleItemClick}) => {
    return (
        <div className="grid grid-cols-4 p-6 h-32  bg-gray-200 items-center text-center border-5 hover:bg-red-900 hover:text-white"
            onClick={() => handleItemClick(data.station.name)}
        >
            <div className="col-span-4">
                <div className="text-xl font-medium text-black break-words hover:text-white">Station Name: {data.station.name}</div>
                <p className="text-2xl text-gray-500 hover:text-white">AQI: {data.aqi}</p>
            </div>
        </div>
    );
};

export default Widget;
