import React from 'react'

const StudentCard = ({ students, collegename, departmentname, classname }) => {
  return (
      <div className="card shadow-lg mb-4 border-0 rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '500px' }}>
          <div className="row g-0">
              <div className="col-md-5">
                  <img 
                      src={`/images/${collegename}.jpg`} 
                      alt={`${collegename} logo`} 
                      className="img-fluid rounded-start" 
                      style={{ objectFit: 'cover', height: '200px', width: '100%' }} 
                  />
              </div>
              <div className="col-md-7">
                  <div className="card-body px-4 py-3 d-flex flex-column justify-content-between" style={{ height: '200px' }}>
                      <div>
                          <h5 className="card-title text-primary fw-bold">{students.studentname}</h5>
                          <p className="card-text text-muted mb-1">Date of Birth: {students.studentdateOfBirth}</p>
                          <p className="card-text text-muted">Class: {classname}</p>
                          <p className="card-text text-muted">Department: {departmentname}</p>
                          <p className="card-text text-muted">College: {collegename}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default StudentCard;
