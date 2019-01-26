import React from 'react';
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Label, Input,Container } from 'reactstrap';
//import Calendar from 'react-calendar';
import './users.css'


export default class Users extends React.Component {

	addEvent(event) {
		console.log(this.refs);
		event.preventDefault();
		let shindig =this.refs.shindig.value;
		let newDate = this.refs.newDate.value;

		let todo = {
			shindig,
			newDate
		};
		let todos = this.state.todos;

		todos.push(todo);

		this.setState({
			todos: todos
		})

	}
	constructor (){
		super();
		this.addEvent =this.addEvent.bind(this);
		this.state ={
			todos: []
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
                        <pre>
							<form>
							<ul>
								{todos.map((todo => <li>{todo.shindig}</li>))}
							</ul>
							</form>
						</pre>
                        
                    </Card>
                </Col>
            </Row>
           
            <hr></hr>
        
            <Container>
			
				<Col md="4">
					<Card body class ="cardbody">
						<CardTitle><h1>Get Started</h1></CardTitle>
						<Form>
							<FormGroup>
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
						<Button onClick={this.addEvent}> Creat Event</Button>
					</Card>
				</Col>
                
			
            </Container>
            
            </div>

		);
	}
}
