import Exercise from './Exercise';

export default interface Workout {
  name: string;
  startDate?: string;
  endDate?: string;
  exercises?: Exercise[];
  id?: string;
}