import React from "react";
import Card from "./components/card";

const App: React.FC = () => (
  <Card.Section>
    <Card>
      <Card.Row>
        <Card.Split>
          <Card.Title>Join our community</Card.Title>
          <Card.MiniDesc>
            30-day, hassle-free money back guarantee
          </Card.MiniDesc>
          <Card.Desc pos={1}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </Card.Desc>
        </Card.Split>
      </Card.Row>
      <Card.Row>
        <Card.Split>
          <Card.SubTitle>Monthly Subscription</Card.SubTitle>
          <Card.Price>
            $29<span>per month</span>
          </Card.Price>
          <Card.Desc pos={2}>Full access for less than $1 a day</Card.Desc>
          <Card.Button>Sign Up</Card.Button>
        </Card.Split>
        <Card.Split>
          <Card.SubTitle>Why Us</Card.SubTitle>
          <Card.Desc pos={3}>
            Tutorials by industry experts
            <br />
            Peer &amp; expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks
            <br />
            New videos every week
          </Card.Desc>
        </Card.Split>
      </Card.Row>
    </Card>
  </Card.Section>
);

export default App;
