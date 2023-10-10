import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';

const Murphys = () => (
  <Container>
    <h1 className="text-center">Murphy's</h1>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);