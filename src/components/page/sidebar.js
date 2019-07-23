import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {} from 'react-bootstrap'
import RelatedKinds from '../kind/relatedKinds'
import RelatedPantheons from '../pantheon/relatedPantheons'
import RelatedSymbols from '../symbol/relatedSymbols'
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
                Popular Dieties:<br />
                Greek: Hecate, Dionysus, Gaia, Artemis, Apollo<br />
            </div>
            <div className="side-bar-panel">
                Popular Collections:<br />
            </div>
            <div className="side-bar-panel">  
                Beginner Categories:<br />
            </div>
        </div>

        <div className="side-bar-section">
            <div className="side-bar-panel">
                <Link to="/users">Log In</Link>
            </div>
        </div>

    </div>
}

export default Menu;