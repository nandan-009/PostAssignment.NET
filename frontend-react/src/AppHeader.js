import React from 'react';

const AppHeader = () => {

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

  return (
    <div className="bg-light text-primary py-4 shadow-sm rounded-3 mb-3 d-flex justify-content-between align-items-center">
      {/* Title and Subtitle (Centered) */}
      <div className="w-100 text-center">
        <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem' }}>
          Data Processing Project
        </h1>
        <p className="lead mb-0" style={{ fontSize: '1.1rem' }}>
          Powered by React
        </p>
      </div>

      {/* Log Out Button (Right-Aligned) */}
      <button className='btn btn-danger' style={{width:'100px'}} onClick={logout}>Log out</button>
    </div>
  );
};

export default AppHeader;
