import React from 'react';
import Hero from './components/hero';
import Marketing from './components/marketing';
import Navigation from './components/navigation';
import Footer from './components/footer';
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
