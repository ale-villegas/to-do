import useTasks from "../hooks/useTasks"
import { deleteTask, updateIsDone } from "../store/sliceTasks"
import Check from "./icons/Check"
import Delete from "./icons/Delete"


const Task = ({task}) => {
const {dispatch} = useTasks()
  const handleCheckBox = (task) => {

    dispatch(updateIsDone(task))

  } 

  const handleDelete = (task) => {
    dispatch(deleteTask(task))
  }
  return (
    <div className={`box-task ${task.isDone ? "done" : ""}`}>
      <div className="style-checkbox" onClick={() => handleCheckBox(task) }>
        {
          task.isDone && <Check/>
        }


      </div>

      <p>
{task.content}
      </p>  


      <Delete onClick={() => handleDelete(task)} />
      
    </div>
  )
}

export default Task