import React from 'react'
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import GenreContainer from '../containers/GenreContainer'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

const styles = {
  logIn: {
    display: 'inline-block',
    padding: '15px',
    color: 'rgb(0, 151, 167)'
  },
  title:{
    fontFamily:'roboto',
    fontWeight: 'bold'
  }
}

export default function AppNavbar(props) {
  const user = props.user
  const movies = props.movies

  return (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand >
        <a href="#" style={styles.title}><Link to={`/`}>Movie Pocket</Link></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <div style={styles.logIn}>
            <nav>
              {user ? <WhoAmI/> : <Login/>}
            </nav>
        </div>
      </Nav>
      <Nav>
        <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}><Link to={`/genres/Comedy`}>Comedy</Link></MenuItem>
          <MenuItem eventKey={2.2}><Link to={`/genres/Horror`}>Horror</Link></MenuItem>
        </NavDropdown>
      </Nav>
      <Navbar.Text pullRight>
        Have a great day!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
    )
}