import React from 'react';
import { Card, Button, CardTitle, Row, Col, Form, FormGroup, Label, Input,Container } from 'reactstrap';
//import Calendar from 'react-calendar';
import './users.css'


export default class Users extends React.Component {
    state = {
        date: new Date(),
      }
     
      onChange = date => this.setState({ date })
	render() {
		return (
            <div>
            
            <Row>
                <Col sm ="1">
                <img src = "assets/img/letter.png" height= "75" width ="75" className ="logo" respomsive/>
                </Col>
                <Col sm="11">
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        
                        <Button>Go somewhere</Button>
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
								<Input type="name" name="eventName" id="eventExample" placeholder="Your ShinDig" />
							</FormGroup>
							<FormGroup>
								<Label for="exampleTime">Time & Date</Label>
								<Input
									type="date"
									name="dateTime"
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

						<Button>Creat Event</Button>
					</Card>
				</Col>
                
			
            </Container>
            
            </div>

		);
	}
}
