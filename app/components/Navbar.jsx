import React from 'react'
import {Link} from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'
import GenreContainer from '../containers/GenreContainer'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

export default function AppNavbar(props) {
  const user = props.user
  const movies = props.movies

  return (
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
      </Navbar.Text>
      <div>
            <nav>
              {user ? <WhoAmI/> : <Login/>}
            </nav>
      </div>
      <Nav>
        <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}><Link to={`/Comedy`}>Comedy</Link></MenuItem>
          <MenuItem eventKey={2.2}><Link to={`/Horror`}>Horror</Link></MenuItem>
        </NavDropdown>
      </Nav>
      <Navbar.Text pullRight>
        Have a great day!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
    )
}