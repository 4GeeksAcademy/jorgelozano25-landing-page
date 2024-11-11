import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container mt-3">
        <div className="row">
		<div className="col-md-3">
            <Card 
              title="Card Title 1" 
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
              buttonText="Find Out More!" 
            />
          </div>
		  <div className="col-md-3">
            <Card 
              title="Card Title 2" 
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
              buttonText="Find Out More!" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              title="Card Title 3" 
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
              buttonText="Find Out More!" 
            />
          </div>
		  <div className="col-md-3">
            <Card 
              title="Card Title 4" 
              text="Lorem ipsum dolor sit amet consectetur adipiscing elit" 
              buttonText="Find Out More!" 
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;