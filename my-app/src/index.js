import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Image } from 'react-bootstrap';

const TopMenu = () => (
  <Container id = "topMenu">
    <Nav className="me-auto justify-content-start">
      <Image src = "http://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png" width="200px"></Image>
    </Nav>
    <Nav className="justify-content-end">

    </Nav>
  </Container>
);

const IslandSnowLogo = () => (
  <h1>IslandSnowLogo</h1>
);

const MiddleMenu = () => (
  <h1>MiddleMenu</h1>
);

const FullWidthImage = () => (
  <h1>FullWidthImage</h1>
);

const FooterMenu = () => (
  <h1>FooterMenu</h1>
);

const Murphys = () => (
  <Container>
    <TopMenu/>
    <IslandSnowLogo/>
    <MiddleMenu/>
    <FullWidthImage/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);