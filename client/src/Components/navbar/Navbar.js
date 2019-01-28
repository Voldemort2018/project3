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
                            <NavItem>
                                <NavLink href="#about">About Us</NavLink>
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

                                        {/* <Modal
                                            isOpen={this.state.modal}
                                            toggle={this.toggle}
                                            className={this.props.className}
                                        >
                                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email</Label>
                                                        <Input
                                                            type="email"
                                                            name="email"
                                                            id="exampleEmail"
                                                            placeholder="with a placeholder"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="examplePassword">Password</Label>
                                                        <Input
                                                            type="password"
                                                            name="password"
                                                            id="examplePassword"
                                                            placeholder="password"
                                                        />
                                                    </FormGroup>
                                                </Form>
                                            </ModalBody>
                                            <ModalFooter>

                                            </ModalFooter>
                                        </Modal> */}
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