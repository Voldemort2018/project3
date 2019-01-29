import React from 'react';
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import MapContainer from '../map/Map';
//import Calendar from 'react-calendar';
import Navbar from '../navbar/Navbar';
import './users.css';


export default class Users extends React.Component {
	constructor (){
		super();
		this.addEvent =this.addEvent.bind(this);
		this.removeEvent =this.removeEvent.bind(this);
		this.details = this.details.bind(this);
		this.state ={
			todos: [],
			shinDigInput: "testState",
			newDate: "",
			location:""
		}
		 

	}
	handleInputChange = (event)  => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
	
		this.setState({
		  [name]: value
		});
	  }
	
	details(index){
		let todos =this.state.todos;
		let todo = todos.find(function(todo){
			return todo.counter === index
		});
		console.log("Your ShinDigs")
		console.log(todo);
	}

	removeEvent (index){
		let todos =this.state.todos;
		let todo = todos.find(function(todo){
			return todo.counter === index
		});

		todos.splice(todo, 1);

		this.setState({
			todos:todos
		});

	}

	addEvent(event) {
		event.preventDefault();

		let todo = {
			shindig: this.state.eventName,
			dateTime: this.state.dateTime,
			
			location: this.state.map
		};

		console.log("Adding todo to state")
		console.log(todo)
		this.setState({
			todos: [...this.state.todos, todo],
			dateTime: this.state.dateTime,
			location: this.state.map
			
		});


		
		

	}

     
	  onChange = date => this.setState({ date })

	render() {
		let auth = this.props.auth;
		let todos = this.state.todos;
		return (
            <div>
            <Navbar auth= {auth} />
            <Row>
                <Col sm ="1">
                <img src = "assets/img/letter.png" alt="Shindig logo" height= "75" width ="75" className ="logo" respomsive/>
                </Col>
                <Col sm="11">
                    <Card body>
                        <CardTitle><h1>My Events</h1></CardTitle>
						<form>
								{todos.map((todos, index) => 
								<li key ={index} className = "mylist">
									{todos.shindig} {todos.dateTime} {todos.location}
									<Button onClick={this.removeEvent.bind(null, todos.counter)}> Completed </Button>
									<Button onClick={this.details.bind(null, todos.counter)}>View Details</Button>
								</li>)}
							</form>
                        
                    </Card>
                </Col>
            </Row>
           
            <hr></hr>
        
            <Container>
					<Row>
					<Col md="6">
						<Card body class="cardbody">
							<CardTitle>
								<h1>Get Started</h1>
							</CardTitle>
							<Form ref="eventCreation">
								<FormGroup>
									<Label for="event">Name</Label>
									<Input
										type="text"
										name="eventName"
										id="eventExample"
										onChange={this.handleInputChange}
										placeholder="Your ShinDig"
									/>
								</FormGroup>
								<FormGroup>
									<Label for="exampleTime">Time & Date</Label>
									<Input
										type="date"
										name="dateTime"
										onChange={this.handleInputChange}
										id="exampleDate"
										placeholder="Date"
									/>
								</FormGroup>
								{/* GOOGLEMAPS LINK NEEDED BELOW */}
								<FormGroup>
								<Label for="exampleLocation">Location</Label>
								<Input
									type="location"
									name="map"
									id="exampleMap"
									onChange={this.handleInputChange}
									placeholder="Where are we partying?"
								/>
                            </FormGroup>
							</Form>

							{/*button for CEATE */}
							<Button onClick={this.addEvent.bind(this)}> Create Event</Button>
						</Card>
					</Col>
					<Col md="6">
						<MapContainer/>
					</Col>
					</Row>
				</Container>
            </div>

		);
	}
}
