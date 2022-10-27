import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="text-center">
      <h4>This is FAQ.</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Learning Guru</Accordion.Header>
          <Accordion.Body>
            Learning Guru is a online base Educational Websites where Knowledge
            lover people can pay visit with free and with paid courses.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How many courses we have?</Accordion.Header>
          <Accordion.Body>
            We have 6 courses at this moment that are most demandible in the
            market. We will add more coureses later on the base of market
            demand.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Whats is the benefit of your Courses?
          </Accordion.Header>
          <Accordion.Body>
            There are many benefits to learning online, but the biggest ones
            are: The freedom to learn whatever you want Comfort of learning from
            your own home Ability to work a job while you study They offer
            ultimate convenience and flexibility Earn bonus points for your
            resumé Reduced education costs More opportunities for
            teacher-student interaction You can study at your own pace Expand
            your career horizons Gain greater access to experts in their fields
            Expand your professional network Greater ability to concentrate
            Avoid the dreaded commute Study with thousands of students around
            the world Reduced academic pressure Boost your brain and keep it
            healthy Study according to your learning style Build self-discipline
            and accountability Ability to pursue a hobby or interest Improve
            your communication skills
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Qaulity of Teaching and Teachers.
          </Accordion.Header>
          <Accordion.Body>
            We dont compromise on Quality. The best service we are going to provide for your future. World class teachers are invited to teach you according to your need. So get ready for your journey to make your learing 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
