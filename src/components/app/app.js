import React from 'react';
import Hero from './../hero';
import Marketing from './../marketing';
import Navigation from './../navigation';
import Footer from './../footer';
import { Grid, Row, Col } from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <div>
    <Navigation />
    <Hero />
    <Grid>
      <Row>
        <Col><Marketing /></Col>
      </Row>
    </Grid>
    <Footer />
  </div>
);

export default App;
