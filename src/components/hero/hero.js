import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import gitHubLogo from './github.png';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Row>
          <Col>
            <div className="text"><strong>compwhile</strong></div>
            <div className="minitext">
              Web IDE for learning, visualizing and running computer programs.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="main-buttons">
              <Button
                href="#"
                bsStyle="primary">
                Get Started
              </Button>
              <Button
                href="http://compwhile.readthedocs.io/en/latest/README/"
                bsStyle="primary">
                DOCS
              </Button>
              <Button
                href="https://github.com/compwhile"
                target="_blank"
                bsStyle="info">
                <img src={gitHubLogo} alt="compwhile at GitHub" height="20"/> GitHub
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Hero;
