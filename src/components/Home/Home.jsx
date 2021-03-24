import React, { useState } from "react";
import authService from "../../service/authService";
import Axios from "axios";
import { Container, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Home.css";

function Home() {
  const loginUser = () => {
    
  };

  return (
    <div>
      <Container className='cnt' text>
        <Header as='h1'>Welcome to the Festival Finder App</Header>
        <p>Find the right festival for you!</p>
        <Button
          icon='google'
          className='btn'
          circular={true}
          size='massive'
          content='Sign in with Google'
          color='google plus'
        />
        <a onClick={loginUser} href="http://localhost:3000/auth/google"> sign in </a>
      </Container>
    </div>
  );
}

export default Home;
