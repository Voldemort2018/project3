import React, { Component } from 'react';
import { Jumbotron, Container, Card, CardImg, CardDeck } from 'reactstrap';
import './home.css';
import Navbar from '../navbar/Navbar';


// variable for current year
let year = new Date().getFullYear();


let auth = this.props.auth;


export default class Home extends Component {



	render() {
		return (
			<div>
				<Navbar auth = {auth} />
				<header>
					<Jumbotron fluid>
						<Container fluid>
							<div className="demo-header demo-header-image">
								<h1 className="title-uppercase">ShinDig</h1>
								<h4>Execute with Efficiency</h4>
							</div>
						</Container>
					</Jumbotron>
				</header>
				<Container>
					<div className="header" />
					<h2 middle = "true">Our Mission</h2>
					<p>
						ShinDig is here to empower individuals to create, plan, and execute any event type, at any size.
						ShinDig will become the only applicaiton needed for both host and guest to assign tasks, save
						event infomraiton, and invite friends and family.
					</p>
				</Container>
				<section id="about">
					<Container>
						<Container className="container1">
							<CardDeck className="carddeck">
								<Card inverse>
									<CardImg
										width="100%"
										src="https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
										alt="Card image cap"
									/>
								</Card>
								<Card>
									<CardImg
										top
										width="100%"
										src="https://images.unsplash.com/photo-1524646432175-d58115a8a854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
										alt="Card image cap"
									/>
								</Card>
								<Card>
									<CardImg
										top
										width="100%"
										src="https://images.unsplash.com/photo-1535378181097-9cf5e853b572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
										alt="Card image cap"
									/>
								</Card>
							</CardDeck>
						</Container>
					</Container>
				</section>
				<br />
				<hr />
				<section className ="seperate">
				<div className="section text-center">
                <div className="features">
				<br></br>
                  <h2 className="title">Why ShinDig ?</h2>
				  <br></br>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-info">
						<i className="fas fa-signature fa-3x"></i>
						
                        </div>
						<br></br>
                        <h4 className="info-title">Create</h4>
                        <p>Create a detailed event page for all of your guest to access.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-success">
						<i className="fas fa-user-clock fa-3x"></i>
						
						<br>
						</br>
                        </div>
						<br></br>
                        <h4 className="info-title">Efficeintly Plan Events</h4>
                        <p>Organize a personal to do list or share your list for party goers to create a potluck event!</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="info">
                        <div className="icon icon-danger">
						<i className="fas fa-glass-cheers fa-3x"></i>
                        </div>
						<br></br>
                        <h4 className="info-title">Be Your Own Event Planner</h4>
                        <p>Keep track of all future tasks and in contact with your vendors!</p>
                      </div>
                    </div>
                  </div>
                </div>
				</div>
				
				</section>
				<br></br>
				<h2>Team ShinDig</h2>
				<br></br>
				<Container>
                <div id="images">
                     <div className="row">
                        
                        <div className="col order-sm-2  ">
                            
                            <img src="assets/img/jav.jpg" alt="Thumbnail" className="img-thumbnail img-responsive"/>
                            <p className="text-center">Javier Vega <i className="fab fa-github"></i></p>
							<p className="text-center">Front End</p>
                        </div>
						<div className="col order-sm-2  ">
                            
                            <img src="assets/img/mike.jpg" alt="Thumbnail" className="img-thumbnail img-responsive"/>
                            <p className="text-center">Michael Wenhold <i className="fab fa-github"></i></p>
							<p className="text-center">Database</p>
                        </div>
						<div className="col  order-sm-2  ">
                            
                            <img src="assets/img/steph.png" alt="Thumbnail" className="img-thumbnail img-responsive"/>
                            <p className="text-center">Steph Graham <i className="fab fa-github"></i></p>
							<p className="text-center">Back End</p>
                        </div>
						
						
						<div className="col  order-sm-2">
                            
                            <img src="assets/img/amanda.jpg" alt="Thumbnail" className="img-thumbnail img-responsive"/>
                            <p className="text-center">Amanda Padilla <i className="fab fa-github"></i></p>
							<p className="text-center">Auth0</p>
                        </div>
						<div className="col order-sm-2  ">
                            
                            <img src="assets/img/kang.jpg" alt="Thumbnail" className="img-thumbnail img-responsive"/>
                            <p className="text-center">Kang Park <i className="fab fa-github"></i></p>
							<p className="text-center">API</p>
                        </div>
                    </div>
                    
                </div>  
				</Container>

				

				<footer className="footer">
					<nav className="float-right">
						<ul>
							<a href="https://github.com/Voldemort2018/project3" rel="noopener noreferrer">
								<h3>
									<i className="fab fa-github">Github</i>
								</h3>
							</a>
						</ul>
					</nav>
					<div className="copyright">
						<h3> &copy; {year} ShinDig</h3>
					</div>
				</footer>
			</div>
		);
	}
}