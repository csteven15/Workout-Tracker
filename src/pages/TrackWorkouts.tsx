import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { Formik } from 'formik';
import { TextField, Button, DialogActions } from '@material-ui/core';
import GlobalStore from '../stores/GlobalStore';

const TrackWorkouts : React.FunctionComponent = observer((props) => {
  const context = useContext(GlobalStore);

  async function fetchData() {
    let cache : any = localStorage.getItem('workoutHistory');
    try {
      let data = await JSON.parse(cache);
      if (data) {
        context.updateWorkouts(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h4>Track Workouts Page</h4>
      <Formik
        initialValues={{ workoutName: '' }}
        onSubmit={
          (values) => {
            context.addWorkout({name: values.workoutName})
          }
        }
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <TextField
              label='Workout Name'
              name='workoutName'
              value={props.values.workoutName}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={(props.errors.workoutName && props.touched.workoutName) && props.errors.workoutName}
            />
            <DialogActions>
              <Button
                type="button"
                onClick={() => context.deleteWorkouts()}
              >
                Clear Workouts
              </Button>
              <Button
                type="button"
                onClick={props.handleReset}
              >
                Reset
              </Button>
              <Button type="submit" >
                Submit
              </Button>
              {/* <DisplayFormikState {...props} /> */}
            </DialogActions>
          </form>
        )}
      />
      <div>
        <h4>Saved Workouts</h4>
        {context.workouts ? context.workouts.map(workout => {
          return <h4 key={workout.createTime}>{workout.name}</h4>
        }) : <h4>No Workouts...</h4>}
      </div>
    </div>
  )
});

export default TrackWorkouts;