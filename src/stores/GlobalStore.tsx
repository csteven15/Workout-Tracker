import { observable, computed } from 'mobx';
import moment from 'moment';
import { persist } from 'mobx-persist';
import { RootStore } from "./RootStore";
import { Exercise, Workout } from '../models';

export class GlobalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist("list") @observable workouts : Workout[] = [];
  @persist("list") @observable exercises : Exercise[] = [];

  addWorkout(workout : Workout) : void {
    workout.id = workout.id + moment().toLocaleString();
    this.workouts.push(workout);
  }

  addExercise(exercise : Exercise) : void {
    exercise.id = exercise.name + moment().toLocaleString();
    this.exercises.push(exercise);
  }

  updateWorkouts(cache : any) : void {
    this.workouts = cache;
  }

  deleteWorkouts() : void {
    this.workouts = [];
  }

  @computed get getWorkouts() : Workout[] {
    return this.workouts;
  }

  @computed get getExercises() : Exercise[] {
    return this.exercises;
  }
}