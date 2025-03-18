import React from 'react'
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    return (
        <div className="card shadow-lg mb-4 border-0 rounded-3 overflow-hidden" style={{ width: '100%', maxWidth: '500px' }}>
            <div className="row g-0">
               
                <div className="col-md-5">
                    <img 
                        src={`/images/${college.collegename}.jpg`} 
                        alt={`${college.collegename} logo`} 
                        className="img-fluid rounded-start" 
                        style={{ objectFit: 'cover', height: '200px', width: '100%' }} 
                    />
                </div>
   
                <div className="col-md-7">
                    <div className="card-body px-4 py-3 d-flex flex-column justify-content-between" style={{ height: '200px' }}>
                        <div>
                            <h5 className="card-title text-primary fw-bold">{college.collegename}</h5>
                            <p className="card-text text-muted mb-3">{college.collegeaddress}</p>
                        </div>

                        <div className="mt-auto text-center">
                            <Link to={`/departments/?collegename=${college.collegename}`}>
                                <button className="btn btn-primary btn-sm px-4 py-2 rounded-pill shadow-sm">
                                    View Departments
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeCard;
