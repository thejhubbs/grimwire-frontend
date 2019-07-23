import React from 'react'
import {Route} from 'react-router-dom'

import LogIn from '../components/user/logIn'
import UserProfile from '../components/user/userProfile'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return <div>
            <Route path="/users" exact component={LogIn} />
            <Route path="/users/:id" exact component={UserProfile} />
        </div>
    }
}

export default User
