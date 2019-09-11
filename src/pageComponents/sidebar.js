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
                <h5>Random</h5>
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <h5>Convienent</h5>
                <h5>Convienent</h5>
                <h5>Convienents</h5>
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <h5>Beginner</h5>
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
