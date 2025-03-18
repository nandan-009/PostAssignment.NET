import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import StudentCard from './StudentCard';

const Students = () => {
 
    const location = useLocation();
    const [students, setStudents] = useState(null);

    const queryParams = new URLSearchParams(location.search);
    const collegename = queryParams.get('collegename');
    const departmentname = queryParams.get('departmentname');
    const classname = queryParams.get('classname');



    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`http://localhost:5001/api/Home/GetStudent/${collegename}/${departmentname}/${classname}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
                setStudents(response.data);
            })
    }, []);

    return (
        students?.map(s => <StudentCard key={s.id} students={s} collegename={collegename} departmentname={departmentname} classname={classname} />)
    )
}

export default Students