import React, { useContext } from 'react';
import { observer } from "mobx-react-lite"
import { RootStoreContext } from "../stores/RootStore";

const PlannedWorkouts : React.FunctionComponent = observer((props) => {
  const context = useContext(RootStoreContext);
  return (
    <div>
      <h1>Planned Workouts Page</h1>
      <div>
        <h4>Saved Workouts</h4>
        {context.globalStore.workouts ? context.globalStore.workouts.map((workout : any) => {
          return <h4 key={workout.id}>{workout.name}</h4>
        }) : <h4>No Workouts...</h4>}
      </div>
    </div>
  )
});

export default PlannedWorkouts;