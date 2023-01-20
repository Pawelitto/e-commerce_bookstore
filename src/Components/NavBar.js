import React from 'react';
import Search from './Search';
import { FiUser } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import logo from '../Images/book-high-resolution-logo-color-on-transparent-background.svg';
import '../Styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="lewo" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="odnosnikNav" href="#">
            Nowości
          </Nav.Link>
          <Nav.Link className="odnosnikNav" href="#">
            Bestsellery
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Brand className="srodek" href="#">
        <img src={logo} alt="logo" className="logosvg" />
      </Navbar.Brand>

      <Navbar.Collapse className="prawo" id="basic-navbar-nav">
        <AiOutlineHeart size={32} className="ikonka" />
        <RiShoppingBagLine size={32} className="ikonka" />
        <FiUser size={32} className="ikonka" />
        <Form inline className="ml-auto formularz">
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          <Search />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
