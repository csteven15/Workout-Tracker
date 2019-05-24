import React, { useContext } from 'react';
import { observer } from "mobx-react-lite"
import { Formik } from 'formik';
import { TextField, Button, DialogActions } from '@material-ui/core';
import { withRouter } from 'react-router';

import { RootStoreContext } from "../stores/RootStore";

const TrackWorkouts : React.FunctionComponent = observer((props : any) => {
  const context = useContext(RootStoreContext);

  return (
    <div>
      <h4>Track Workouts Page</h4>
      <Formik
        initialValues={{ workoutName: '' }}
        onSubmit={(values) => {
          // context.globalStore.addWorkout({name: values.workoutName});
          props.history.push('/new-workout', { workoutName: values.workoutName });
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label='Workout Name'
              name='workoutName'
              value={values.workoutName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.workoutName && touched.workoutName) && errors.workoutName}
            />
            <DialogActions>
              <Button
                variant='outlined'
                type="button"
                onClick={() => context.globalStore.deleteWorkouts()}
              >
                Clear Workouts
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant='outlined'
                color='secondary'
                type="button"
                onClick={handleReset}
              >
                Reset
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant='contained'
                color='primary'
                type="submit"
              >
                Create New Workout
              </Button>
              {/* <DisplayFormikState {...props} /> */}
            </DialogActions>
          </form>
        )}
      />
      <div>
        <h4>Saved Workouts</h4>
        {context.globalStore.workouts.length !== 0 ? context.globalStore.workouts.map((workout : any) => {
          return <h4 key={workout.id}>{workout.name}</h4>
        }) : <h4>No Workouts...</h4>}
      </div>
    </div>
  )
});

export default withRouter(TrackWorkouts);