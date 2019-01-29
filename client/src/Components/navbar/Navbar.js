import React from 'react';
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
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import './navbar.css';

export default class NavbarLogin extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            modal: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            modal: !this.state.modal
        });
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {

        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <Navbar color="" light expand="md">
                    <NavbarBrand href="/">
                        {' '}
                        <h3>
                            <span>ShinDig</span>
                        </h3>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {
                                isAuthenticated() ? (
                                    <NavItem>
                                        <NavLink href="/user" onClick={this.goTo.bind(this)}>Profile</NavLink>
                                    </NavItem>
                                ) : (
                                        <NavItem>
                                            {/* nothing to add here */}
                                        </NavItem>
                                    )
                            }
                            <NavItem>
                                <NavLink href="/#about" onClick={this.goTo.bind(this)}>About Us</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login / Logout
								</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        {
                                            !isAuthenticated() ? (
                                                <Button color="secondary" onClick={this.login.bind(this)}> Login </Button>
                                            ) :
                                                (
                                                    <Button color="secondary" onClick={this.logout.bind(this)}> Logout </Button>
                                                )
                                        }
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

//Commented out sections of old code for a modal for the login and log out functions