import React from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from 'react-router-dom';
import { Container, List, ListItem, Heading } from './';
import { WorkshopAttendees, WorkshopTopics } from '../containers';

const Home = () => (
  <Container>
    <Heading>Workshop 2018</Heading>
    <List>
      <ListItem>
        <Link to="/topics/1">Workshop Topics - day 1</Link>
      </ListItem>
      <ListItem>
        <Link to="/topics/2">Workshop Topics - day 2</Link>
      </ListItem>
      <ListItem>
        <Link to="/attendees">Attendees</Link>
      </ListItem>
    </List>
  </Container>
);

const BasicRoute = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/topics/:day" component={withRouter(WorkshopTopics)} />
      <Route path="/attendees" component={WorkshopAttendees} />
    </React.Fragment>
  </Router>
);

export default BasicRoute;
