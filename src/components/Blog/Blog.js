import React from "react";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div className='text-center'>
      <h2>BLOG</h2>
      <Card className='m-2 bg-light' border="primary" style={{ width: "50rem" }}>
        <Card.Title>Whats CORS?</Card.Title>
        <Card.Body>
          <Card.Text>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-2 bg-light' border="primary" style={{ width: "50rem" }}>
        <Card.Title>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Card.Title>
        <Card.Body>
          <Card.Text>
            Most apps need to know the identity of a user. Knowing a user's
            identity allows an app to securely save user data in the cloud and
            provide the same personalized experience across all of the user's
            devices. Firebase Authentication provides backend services,
            easy-to-use SDKs, and ready-made UI libraries to authenticate users
            to your app. It supports authentication using passwords, phone
            numbers, popular federated identity providers like Google, Facebook
            and Twitter, and more. Firebase Authentication integrates tightly
            with other Firebase services, and it leverages industry standards
            like OAuth 2.0 and OpenID Connect, so it can be easily integrated
            with your custom backend. When you upgrade to Firebase
            Authentication with Identity Platform, you unlock additional
            features, such as multi-factor authentication, blocking functions,
            user activity and audit logging, SAML and generic OpenID Connect
            support, multi-tenancy, and enterprise-level support.
            <br /> <hr></hr>
            <h3>Following are other Authentiction systems:</h3>
            <h5>Scalable realtime</h5>
            <h5>database (SQL or NoSQL) GraphQL and Rest APIs.</h5>
            <h5>Cloud Code Functions.</h5>
            <h5>Authentication. Notifications.</h5>
            <h5>File Storage..</h5>
            <h5>Social Login etc.</h5>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-2 bg-light' border="primary" style={{ width: "50rem" }}>
        <Card.Title>How does the private route work?</Card.Title>
        <Card.Body>
          <Card.Text>
            Private Routes vary based on the Apps, For example, Dashboard, User
            Profile, App Settings, Home etc. In simple words, These routes can
            be accessed only after login. The constraints for Public and Private
            routes are that Public routes should not be accessed after login and
            Private routes should not be accessible before login. In this
            article, we can see. How to create public and private routes using
            react-router for your react apps. Let's start
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-2 bg-light' border="primary" style={{ width: "50rem" }}>
        <Card.Title>What is Node? How does Node work?</Card.Title>
        <Card.Body>
          <Card.Text>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.js: Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept Asynchronous Non-blocking I/O
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
