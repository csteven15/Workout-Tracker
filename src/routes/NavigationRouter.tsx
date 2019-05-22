import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Spinner from '../components/Spinner';

const Home = React.lazy(() => import('../pages/Home'));
const PlannedWorkouts = React.lazy(() => import('../pages/PlannedWorkouts'));
const CompletedWorkouts = React.lazy(() => import('../pages/CompletedWorkouts'));
const TrackWorkouts = React.lazy(() => import('../pages/TrackWorkouts'));


const NavigationRouter = () => (
  <React.Fragment>
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/planned-workouts' component={PlannedWorkouts} />
        <Route exact path='/completed-workouts' component={CompletedWorkouts} />
        <Route exact path='/track-workouts' component={TrackWorkouts} />
      </Switch>
    </React.Suspense>
  </React.Fragment>
);

export default NavigationRouter;