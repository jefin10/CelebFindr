import React, { useState } from 'react';
import axios from 'axios';
import Ss from './Ss';
import '../style/style.css';

const Cd = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleClick = () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1];

      try {
        const response = await axios.post('http://localhost:5000/predict', {
          image: base64Image,
        });
        setPrediction(response.data);
      } catch (err) {
        console.error('Error:', err);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Ss />

      <div className="flex justify-center items-center mt-5 bg-gray-950">
        <div className="bg-gray-800 rounded-lg p-8 w-full mx-[19%] shadow-lg flex justify-center flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <label className="custum-file-upload" htmlFor="file">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                  />
                </svg>
              </div>
              <div className="text">
                {file ? (
                  <span className="text-green-500">File Uploaded: {file.name}</span>
                ) : (
                  <span>Click to upload an image</span>
                )}
              </div>
              <input type="file" id="file" onChange={handleFileUpload} hidden />
            </label>
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full transition-colors duration-300 w-[20%]"
          >
            Submit
          </button>
          {prediction && (
            <div className="mt-6 text-white">
              <h3 className="text-xl font-bold mb-2">Prediction:</h3>
              <p>Class: {prediction.predicted_class}</p>
              <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cd;
