import React from 'react';
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Label, Input,Container } from 'reactstrap';
//import Calendar from 'react-calendar';
import './users.css'


export default class Users extends React.Component {

	details(index){
		let todos =this.state.todos;
		let todo = todos.find(function(todo){
			return todo.counter === index
		});
		console.log("Your ShinDigs" + todo)

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
		let shindig =this.refs.shindig.value;
		let newDate = this.refs.newDate.value;
		let counter = this.state.counter;
		let todo = {
			shindig,
			newDate,
			counter
		};
		counter +=1;
		let todos = this.state.todos;

		todos.push(todo);

		this.setState({
			todos: todos,
			counter: counter
		});


		{/** reset the inputs */}
		

	}
	constructor (){
		super();
		this.addEvent =this.addEvent.bind(this);
		this.removeEvent =this.removeEvent.bind(this);
		this.details = this.details.bind(this);
		this.state ={
			todos: [],
			counter: 0
		}
		
	}
	state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
	render() {
		let todos = this.state.todos;
		return (
            <div>
            
            <Row>
                <Col sm ="1">
                <img src = "assets/img/letter.png" height= "75" width ="75" className ="logo" respomsive/>
                </Col>
                <Col sm="11">
                    <Card body>
                        <CardTitle><h1>My Events</h1></CardTitle>
							<form >
							<ul>
								<row>
								<li>
								{todos.map((todo => <li>{todo.shindig}</li>))}
								{todos.map((todo => <li>{todo.newDate}</li>))}
								<Button onClick = {this.removeEvent.bind(null, todos.counter)}> Completed </Button>
								<Button onClick = {this.details.bind(null, todos.counter)} >View Details</Button>
								</li>
								</row>
							</ul>
							</form>
                        
                    </Card>
                </Col>
            </Row>
           
            <hr></hr>
        
            <Container>
			
				<Col md="4">
					<Card body class ="cardbody">
						<CardTitle><h1>Get Started</h1></CardTitle>
						<Form ref = "eventCreation">
							<FormGroup >
								<Label for="event">Name</Label>
								<Input type="name" name="eventName" id="eventExample" ref="shindig" placeholder="Your ShinDig" />
							</FormGroup>
							<FormGroup>
								<Label for="exampleTime">Time & Date</Label>
								<Input
									type="date"
									name="dateTime"
									ref="newDate"
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
									placeholder="Where are we partying?"
								/>
                            </FormGroup>

						</Form>
			{/*button for CEATE */}
						<Button onClick={this.addEvent}> Create Event</Button>
					</Card>
				</Col>
                
			
            </Container>
            
            </div>

		);
	}
}
