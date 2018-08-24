import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';
import logoBrand from '../../../assets/logo_FGB.png'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './style.css'
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar expand="md" className="fixed-top">
                    <NavbarBrand tag={Link} to="/">
                        <img src={logoBrand} alt="brand-logo" className="brand-logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <FontAwesomeIcon icon={faBars} className="text-white" />
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/tentang" >TENTANG</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/trading">TRADING</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/edukasi">EDUKASI</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/blog" >BLOG</NavLink>
                            </NavItem>
                            {/*  */}
                            <NavItem>
                                <NavLink tag={Link} to="/callme">HUBUNGI KAMI</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavItem tag={Link} to="/register">

                                <Button className="akun-live-style">BUKA AKUN LIVE</Button>
                            </NavItem>
                            <NavItem className="ml-3">
                                <Button className="akun-demo-style">BUKA AKUN DEMO</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;