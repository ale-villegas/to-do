
import useTasks from '../hooks/useTasks'
import FormTask from './FormTask'
import Task from './Task'

const ListOfTasks = () => {
  const {tasks} = useTasks()
  console.log(tasks)
  return (
    <div className="full-container">
      <h1>
        TO-DO
      </h1>
    <FormTask/>

{
tasks && tasks.map((task) => {
  return(
    <Task key={task.id} task={task}/>
  )
})
}

    </div>
  )
}

export default ListOfTasks