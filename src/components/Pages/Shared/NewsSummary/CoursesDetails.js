import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';


const CoursesDetails = ({ course }) => {
  const { title, image_url, details, _id} = course;
  return (
    <div>
      
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 150)}
                
              </p>
            ) : (
              <p>{details}</p>
            )}
            <Link to={`/courses/${_id}`}><Button variant="success">Details</Button></Link>
            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesDetails;
