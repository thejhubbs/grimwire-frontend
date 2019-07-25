import React from 'react';
import './App.scss';

import {Container, Row, Col} from 'react-bootstrap'

import Header from './pageComponents/header'
import SideBar from './pageComponents/sidebar'
import Body from './pageComponents/body'
import Footer from './pageComponents/footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col xs={3} className="side-bar">
            <SideBar />
          </Col>
          <Col xs={9} className="main-page">
            <Body />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
