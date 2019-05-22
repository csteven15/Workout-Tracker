import { createContext } from 'react';
import { observable, decorate, computed } from 'mobx';
import moment from 'moment';

interface Workout {
  name: string;
  startDate?: string;
  endDate?: string;
  exercises?: [];
  createTime?: string;
}

interface Exercise {
  name: string;
  reps?: number;
  weight?: number;
  description?: string;
}

export class GlobalStore {
  workouts : Workout[] = [];
  exercises : Exercise[] = [];

  addWorkout(workout : Workout) : void {
    workout['createTime'] = moment().toLocaleString();
    this.workouts.push(workout);
    console.log('new', workout)
    localStorage.setItem('workoutHistory', JSON.stringify(this.workouts));
  }

  addExercise(exercise : Exercise) : void {
    const t = moment();
    console.log('now', t)
    const newExercise = exercise;
    newExercise['name'] = exercise['name'] + t;
    this.exercises.push(newExercise);
  }

  updateWorkouts(cache : any) : void {
    this.workouts = cache;
  }

  deleteWorkouts() : void {
    localStorage.removeItem('workoutHistory');
    this.workouts = [];
  }


  get getWorkouts() : Workout[]{
    return this.workouts;
  }

  get getExercises() : Exercise[] {
    return this.exercises;
  }
}

decorate(GlobalStore, {
  workouts: observable,
  exercises: observable,
  getWorkouts: computed,
  getExercises: computed
});

export default createContext(new GlobalStore());