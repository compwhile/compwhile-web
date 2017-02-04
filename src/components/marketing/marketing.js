import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import './marketing.css';

class Hero extends Component {
  render() {
    return (
      <div className="marketing">
        <Row>
            <Col sm={4}>
              <div className="marketing-item">
                <div className="marketing-icon"><Glyphicon glyph="console" /></div>
                <h3>Code and Run!</h3>
                <p>Write multiple programs within a web IDE - no installation required. Save for later use!</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="marketing-item">
                <div className="marketing-icon"><Glyphicon glyph="gift" /></div>
                <h3>Rich Visualizations</h3>
                <p>Build your input tree via an interactive tree builder. Then view the AST of your program, execute it and visualize its output.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="marketing-item">
                <div className="marketing-icon"><Glyphicon glyph="tasks" /></div>
                <h3>Learn & Get better</h3>
                <p>Solve programming exercises with immediate feedback.</p>
              </div>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Hero;

