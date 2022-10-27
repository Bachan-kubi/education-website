import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const courses = useLoaderData();
  const { title, details, image_url} = courses;
  return (
    <div>
      <Card style={{ width: "40rem" }}>
        <Card.Title className="mt-4 text-center">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="p-3" />
        <Card.Body>
          <Card.Text>{details}</Card.Text>
          <Link to={`/checkout`}>
            <Button variant="primary">Get Premium Access</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
