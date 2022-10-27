import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://education-server-gamma.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='left'>
            <h3 className='text-primary m-4'>List of Courses</h3>
            <div>
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/catergory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;