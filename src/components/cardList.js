import React, { useContext } from "react";
import Metods from "../context/metods";
import TaskCard from "./taskCard";

export function CardList() {
  const { tasks } = useContext(Metods);
  return (
    <div className="columns">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default CardList;
