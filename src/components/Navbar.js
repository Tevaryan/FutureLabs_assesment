import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, Modal,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";
import '../App.css';


class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle =()=> {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() 
  {
    return (
        <Navbar style={{backgroundColor: '#5D6D7E'}} light expand="md">
            <NavbarBrand tag={Link} to={'/Dashboard/Home'}>Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Navbar>
    )
  }
}

export default NavbarComponent;
