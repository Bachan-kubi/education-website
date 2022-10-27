import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesDetails from '../Shared/NewsSummary/CoursesDetails';

const Catergory = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div>
                {
                    courses.map(course=><CoursesDetails key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Catergory;