import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container className="cnt" text>
        <Header as="h1">Welcome to the Festival Finder App!</Header>
        <p>Find the right festival for you!</p>
        <Button
          icon="google"
          className="btn"
          circular="true"
          size="massive"
          content="Sign in with Google"
          secondary
        />
      </Container>
    </div>
  );
}

export default Home;
