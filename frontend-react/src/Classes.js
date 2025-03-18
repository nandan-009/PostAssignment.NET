import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ClassCard from './ClassCard';
import axios from 'axios';

const Classes = () => {
    const location = useLocation();
    const [classes, setClasses] = useState(null);

    const queryParams = new URLSearchParams(location.search);
    const collegename = queryParams.get('collegename');
    const departmentname = queryParams.get('departmentname');



    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`http://localhost:5001/api/Home/GetClasses/${collegename}/${departmentname}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
            .then((response) => {
                setClasses(response.data);
            })
    }, []);

    return (
        classes?.map(c => <ClassCard key={c.id} classes={c} collegename={collegename} departmentname={departmentname} />)
    )
}

export default Classes