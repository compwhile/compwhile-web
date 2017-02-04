import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg'
import './footer.css';

const Footer = () => (
  <footer className="navbar-default navbar-static-bottom footer-main">
    <div className="container-fluid">
      <section>
      <Grid>
        <Row>
          <Col sm={3}>
            <h5><a href="#">Home</a></h5>
            <a href="#">Welcome</a>
            <a href="#">Code and run</a>
          </Col>
          <Col sm={3}>
            <h5><a href="#">Docs</a></h5>
            <a href="#">Quick Start</a>
            <a href="#">WHILE Interpreter</a>
          </Col>
          <Col sm={3}>
            <h5><a href="#">Community</a></h5>
            <a href="#">Contribute</a>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
          </Col>
          <Col sm={3}>
            <h5>More</h5>
            <a href="https://github.com/compwhile" target="_blank">GitHub</a>
            <a href="#">Acknowledgements</a>
          </Col>
        </Row>
      </Grid>
      </section>
      <a href="#" className="compwhile-hover-logo">
        <img src={logo} alt="compwhile" width="170" />
      </a>
      <section className="copyright">
        Made with <strong>♥</strong> and JavaScript
      </section>
    </div>
  </footer>
);

export default Footer;
