import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layput';
import Header from './components/Header/Header';

import NewsFeedPage from './pages/NewsFeed/NewsFeedPage';
import EventsPage from './pages/Events';
import GroupsList from './pages/Groups/GroupsList';
import BetterMePage from './pages/BetterMe/BetterMePage';
import FollowCoworkers from './pages/FollowCoworkers/FollowCoworkers';
import Group from './components/Group';
import PeopleDirectory from './pages/People/PeopleDirectory';
import TakePart from './pages/TakePart/TakePart';
import StarMeUp from './pages/StarMeUp/StarMeUp';
import Profile from './pages/Profile';

const HeaderWrapper = withRouter(props => <Header title="events" {...props} />);

function App(props) {
  return (
    <div className="App" data-test="appComponent">
      <Router>
        <Layout {...props}>
          <HeaderWrapper />
          <Route exact path="/" component={NewsFeedPage} />
          <Route exact path="/peopleyoufollow" component={NewsFeedPage} />
          <Route exact path="/follow-coworkers" component={FollowCoworkers} />
          <Route exact path="/events" component={EventsPage} />
          <Route path="/events/calendar" component={EventsPage} />
          <Route path="/events/celebrations" component={EventsPage} />
          <Route path="/event/:eventId" component={EventsPage} />
          <Route path="/betterme" component={BetterMePage} />
          <Route path="/groups" exact component={GroupsList} />
          <Route path="/group/:id" exact component={Group} />
          <Route path="/group/:id/about" exact component={Group} />
          <Route path="/group/:id/members" exact component={Group} />
          <Route path="/group/:id/events" exact component={Group} />
          <Route path="/group/:id/photos" exact component={Group} />
          <Route path="/group/:id/integrations" exact component={Group} />
          <Route path="/people-directory" exact component={PeopleDirectory} />
          <Route path="/take-part" exact component={TakePart} />
          <Route path="/star-me-up" exact component={StarMeUp} />
          <Route path="/profile/:userId" exact component={Profile} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
