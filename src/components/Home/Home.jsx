import React, { useState, useEffect } from "react";
import authService from "../../service/authService";
import Axios from "axios";
import { Container, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Home.css";
import { SERVER_URL } from '../../shared/constants';
import { Redirect, useHistory } from "react-router";

function Home() { 

  let history = useHistory();
    
   useEffect(() => {
      waitUser();
   }, []);

  const waitUser = async() => {
    const user  = await authService.fetchUser();
      console.log(user)
      if(typeof(user)) 
      history.push('/myFestivals')
  }
 
  const loginUser = (e) => {
    e.preventDefault();
    window.open(`${SERVER_URL}auth/google`, '_self');
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
          onClick={(e) => loginUser(e)}
        />
      </Container>
    </div>
  );
}

export default Home;
