import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DepartmentCard from './DepartmentCard';
import axios from 'axios';


const Departments = () => {

    const location = useLocation();
    const [department, setDepartment] = useState(null);

    const queryParams = new URLSearchParams(location.search);
    const collegename = queryParams.get('collegename');



    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`http://localhost:5001/api/Home/GetDepartment/${collegename}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
                setDepartment(response.data);
            })
    }, []);

    return (
        department?.map(d => <DepartmentCard key={d.id} department={d} collegename={collegename} />)
    )
}

export default Departments