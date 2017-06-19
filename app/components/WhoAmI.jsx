import React from 'react'
import {Link} from 'react-router'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name"><Link to={`/user`}>{user && user.name}</Link></span>
    <button className="logout" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
