import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Spinner from '../components/Spinner';

const Home = React.lazy(() => import('../pages/Home'));
const PlannedWorkouts = React.lazy(() => import('../pages/PlannedWorkouts'));
const CompletedWorkouts = React.lazy(() => import('../pages/CompletedWorkouts'));
const TrackWorkouts = React.lazy(() => import('../pages/TrackWorkouts'));
const NewWorkout = React.lazy(() => import('../pages/NewWorkout'));

const AppRouter : React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/planned-workouts' component={PlannedWorkouts} />
            <Route exact path='/completed-workouts' component={CompletedWorkouts} />
            <Route exact path='/track-workouts' component={TrackWorkouts} />
            <Route exact path='/new-workout' component={NewWorkout} />
          </Switch>
        </React.Suspense>
      </Navigation>
    </BrowserRouter>
  );
}

export default AppRouter;