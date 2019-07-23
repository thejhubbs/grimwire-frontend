import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from 'react-bootstrap'

function Menu() {
    return <div className="header">
        <Container>
            <Row>
                <Col xs={12} lg={2}>
                    <NavLink to="/"><img height="50px" src="https://www.freelogodesign.org/file/app/client/thumb/d61a2eaf-ba59-4c5c-b40b-5d866a55672e_200x200.png?1563814596359" /> GrimWire</NavLink>
                </Col>
                 
                <Col xs={12} lg={10} className="menu-right">
                    <NavLink to="/pantheons">Pantheons & Religions</NavLink>
                    <NavLink to="/collections">Collections & Groups</NavLink>
                    <NavLink to="/categories">Categories & Classes</NavLink>
                    <NavLink to="/symbols">Search</NavLink>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Menu;