import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {} from 'react-bootstrap'
import RelatedKinds from '../components/kind/misc/related'
import RelatedPantheons from '../components/pantheon/misc/related'
import RelatedSymbols from '../components/symbol/misc/related'
import SidePanel from './sidePanel'

function Menu(props) {
    return <div className="">

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <Switch>
                    <Route path="/pantheon/:name" component={RelatedPantheons} />
                    <Route path="/symbol/:name" component={RelatedSymbols} />
                    <Route path="/collection/:name" component={RelatedKinds} />
                    <Route component={SidePanel} />
                </Switch>
            </div>
        </div>

        {/* <div className="side-bar-section">

            <div className="side-bar-panel">
            Current Zodiac Sun Sign:<br />
            Cancer<br />
            ...Other Current Alignments<br />
            </div>

            <div className="side-bar-panel">
            Current Day of The Week:<br />
            Wednesday<br />
            </div>

            <div className="side-bar-panel">
            Current Moon Phase:<br />
            Waning<br />
            </div>

        </div> */}

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <h5>Popular Dieties</h5>
                <Link to='/symbol/Hecate'>Hecate</Link> (Greek)<br />
                <Link to='/symbol/Horus'>Horus</Link> (Horus)<br />
                <Link to='/symbol/Thor'>Thor</Link> (Thor)<br />
                <Link to='/symbol/Shiva'>Shiva</Link> (Hindi)<br />
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <h5>Nature</h5>
                <Link to='/collection/Plants and Herbs'>Plants & Herbs</Link>
                <Link to='/collection/Crystals'>Crystals</Link>
                <Link to='/collection/Trees'>Trees</Link><br />
                <h5>Knowledge</h5>
                <Link to='/collection/People'>People</Link>
                <Link to='/collection/Stories'>Stories & Myths</Link>
                <Link to='/collection/Teachings'>Teachings & Concepts</Link><br />
                <h5>Divination</h5>
                <Link to='/collection/Tarot Cards'>Tarot Cards</Link>
                <Link to='/collection/Runes'>Runes</Link>
                <Link to='/collection/Divination Forms'>All</Link><br />
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <h5>Beginner Categories</h5>
                <Link to='/category/Magic 101'>Magic 101</Link>
                <Link to='/category/Wicca 102'>Wicca 102</Link>
                <Link to='/category/Occult 102'>Occult 102</Link><br />
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <Link to="/users">Admin Log In</Link>
            </div>
        </div>

    </div>
}

export default Menu;
