import React, { useContext } from 'react';
import { observer } from "mobx-react-lite"
import GlobalStore from '../stores/GlobalStore';

const PlannedWorkouts : React.FunctionComponent = observer((props) => {
  const context = useContext(GlobalStore);
  return (
    <div>
      <h1>Planned Workouts Page</h1>
      <div>
        <h4>Saved Workouts</h4>
        {context.workouts ? context.workouts.map(workout => {
          return <h4 key={workout.createTime}>{workout.name}</h4>
        }) : <h4>No Workouts...</h4>}
      </div>
    </div>
  )
});

export default PlannedWorkouts;