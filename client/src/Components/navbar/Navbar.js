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
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form,
    FormGroup,
    Label
} from 'reactstrap';
import './navbar.css';
import Auth from './../../Auth/Auth';

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

    render() {

        const auth = new Auth();
        //Dont forget to correctly route to About Us page when navLink About Us is clicked "line 66"
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
                                <NavLink href="/users">About Us</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Login/SignUp
								</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Button color="secondary" onClick={this.toggle}> Login </Button>
                                        <Modal
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
                                                <Button color="secondary" onClick={this.toggle}> Login </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Button color="secondary" onClick={this.toggle}> SignUp </Button>
                                        <Modal
                                            isOpen={this.state.modal}
                                            toggle={this.toggle}
                                            className={this.props.className}
                                        >
                                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleName">Name</Label>
                                                        <Input
                                                            type="name"
                                                            name="user"
                                                            id="exampleName"
                                                            placeholder="Full Name"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email</Label>
                                                        <Input
                                                            type="email"
                                                            name="email"
                                                            id="exampleEmail"
                                                            placeholder="test@email.com"
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
                                                <Button color="secondary" onClick={this.toggle}> SignUp	</Button>
                                            </ModalFooter>
                                        </Modal></DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}