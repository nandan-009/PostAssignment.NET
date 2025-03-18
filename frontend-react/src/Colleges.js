import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CollegeCard from './CollegeCard';

const Colleges = () => {
  const [college, setCollege] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem('token');

    axios.get('http://localhost:5001/api/Home/GetAllCollege', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {
        setCollege(response.data);
      })

  }, []);

  return (
    college?.map(c => <CollegeCard key={c.id} college={c} />)
  )
}

export default Colleges