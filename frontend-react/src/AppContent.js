import UploadJSON from './UploadJSON';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Colleges from './Colleges';
import Departments from './Departments';
import Classes from './Classes';
import Students from './Students';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

const AppContent = () => {
    return (
        <BrowserRouter>
            <div className="d-flex" style={{ minHeight: '100vh' }}>

                <div className="col-md-4 bg-light p-4 rounded-3 shadow-sm" style={{ height: '100vh', position: 'sticky', top: 0, marginRight: '20px' }}>
                    
                    <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item border-0 mb-4 text-center"
                            style={{
                                backgroundColor: '#f0f8ff',
                                fontSize: '1.2rem',
                                padding: '15px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            <Link to="/upload-json" className="text-decoration-none text-primary">
                                Upload JSON
                            </Link>
                        </li>
                        <li
                            className="list-group-item border-0 mb-4 text-center"
                            style={{
                                backgroundColor: '#f0f8ff',
                                fontSize: '1.2rem',
                                padding: '15px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            <Link to="/colleges" className="text-decoration-none text-primary">
                                Colleges
                            </Link>
                        </li>
                    </ul>
                </div>


                <div className="col-md-8 bg-light" style={{ height: '100vh', overflowY: 'auto' }}>
                    <div className='mt-4 ms-5'>
                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="/colleges" element={<Colleges />} />
                                <Route path="/upload-json" element={<UploadJSON />} />
                                <Route path="/departments" element={<Departments />} />
                                <Route path="/classes" element={<Classes />} />
                                <Route path="/students" element={<Students />} />
                            </Route>
                        </Routes>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppContent;
