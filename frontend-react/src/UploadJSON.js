import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {

  const nav = useNavigate();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a JSON file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5001/api/Home/upload-json', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from server:', response.data);
      alert("Uploded successfully")
      nav('/colleges')
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('upload failed')
    }
  };

  return (
    <div className="card shadow-lg mb-4 border-0 rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '600px' }}>
      <div className="card-body px-4 py-3">
        <h5 className="card-title text-primary fw-bold mb-4">Upload JSON File</h5>
        <div className="mb-3">
          <input 
            type="file" 
            accept=".json" 
            onChange={handleFileChange} 
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button 
            onClick={handleSubmit} 
            className="btn btn-primary btn-sm px-5 py-2 rounded-pill shadow-sm"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
