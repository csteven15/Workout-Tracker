import React, { useContext} from 'react';
import { Formik, FieldArray } from 'formik';
import { Grid, Button, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { RootStoreContext } from "../stores/RootStore";
// import { Exercise } from '../models'

const NewWorkout : React.FunctionComponent = observer((props : any) => {
  const context = useContext(RootStoreContext);
  console.log(props)
  return (
    <div>
      <h1>Add a new workout</h1>
      <Formik
        initialValues={
          {
            exercises: [{ name: '', reps: 0, lbs: 0 }]
          }
        }
        onSubmit={values => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
          values.exercises.map(exercise => {
            context.globalStore.addExercise(exercise);
            return null;
          });
          context.globalStore.addWorkout(props.location.state);
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name='exercises'
              render={({ insert, remove, push }) => (
                <Grid container spacing={40}>
                  {
                    values.exercises.length > 0 && values.exercises.map((exercise, index) => (
                      <Grid item xs={12} key={index}>
                        <Grid container spacing={8}>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            label='Exercise Name'
                            name={`exercises.${index}.name`}
                            value={values.exercises[index].name}
                            onChange={handleChange}
                            // helperText={(errors.exercises[index].name && touched.exercises[index].name) && errors.exercises[index].name}
                          />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              fullWidth
                              label='Reps'
                              name={`exercises.${index}.reps`}
                              value={values.exercises[index].reps}
                              onChange={handleChange}
                              // helperText={(errors.exercises[index].reps && touched.exercises[index].reps) && errors.exercises[index].reps}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              fullWidth
                              label='Lbs'
                              name={`exercises.${index}.lbs`}
                              value={values.exercises[index].lbs}
                              onChange={handleChange}
                              // helperText={(errors.exercises[index].lbs && touched.exercises[index].lbs) && errors.exercises[index].lbs}
                            />
                          </Grid>
                          <Grid item xs={1}>
                            <Button
                              color='secondary'
                              onClick={() => remove(index)}
                            >
                              X
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))
                  }
                  <Grid item xs={12}>
                    <Button
                      variant='outlined'
                      color='primary'
                      onClick={() => push({ name: '', reps: 0, lbs: 0 })}
                    >
                      Add New Exercise
                    </Button>
                  </Grid>
                </Grid>
              )}
            />
            <br />
            <Button
              variant='outlined'
              onClick={event => {
                event.preventDefault();
                handleReset();
              }}
            >
              Reset
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >
              Add Workout
            </Button>
          </form>
        )}
      />
      <div>
        <h5>Previous Exercises</h5>
        {context.globalStore.exercises.length !== 0 ? context.globalStore.exercises.map((exercise : any) => {
          return <h4 key={exercise.id}>{exercise.name}</h4>
        }) : <h4>No Exercises...</h4>}
      </div>
    </div>
  )
});

export default NewWorkout;