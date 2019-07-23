import React from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import SimplePantheonList from '../components/pantheon/simplePantheonList'
import Kinds from '../components/kind/kindsComponent'
import RandomSymbols from '../components/symbol/symbolsComponent'



function Home(props) {
  return (
    <div>


      <div>
        <img height="200px" src="https://www.freelogodesign.org/file/app/client/thumb/d61a2eaf-ba59-4c5c-b40b-5d866a55672e_200x200.png?1563814596359" />
        <h1>GrimWire</h1>
        <p>Spritual, Metaphysical, and Magical Encyclopedia</p>
        <p>Search pantheons, religions, collections, properties, categories, teachings, and stories</p>
      </div>

      <hr />
      <div>
        <SimplePantheonList pantheons={props.pantheons} />
      </div>
      <hr />

      <Row>
        <Col>
          <h3>Pantheons</h3>
          <p>Religions, groups, organizations, and teachings throughout history. Complete histories & informations.</p>
        </Col>
        <Col>
          <h3>Collections</h3>
          <p>Tarot Cards, Crystals, Astrological Signs, Angels, Demons, and the lists & collections that make up GrimWire.</p>
        </Col>
        <Col>
          <h3>Categories</h3>
          <p>Only looking for Wicca 101? Or the spellworking sections? Categories groups together collections for easier absorption.</p>
        </Col>
        <Col>
          <h3>Symbols</h3>
          <p>The whole list of symbols & objects, all the magickal things we have</p>
        </Col>
      </Row>

      <hr />
      <div>
        <h3>Full List of Collections</h3>
        <Kinds />
      </div>
      <hr />

      <div>
        <h4>Random Objects</h4>
        <RandomSymbols randomNumber={4} showSearch={false} />
        See all
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pantheons: state.pantheons
  }
}

export default connect(mapStateToProps)(Home);
