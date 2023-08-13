import { useState } from "react"
import useTasks from "../hooks/useTasks"
import { createTask } from "../store/sliceTasks"

const FormTask = () => {
const [input, setInput] = useState("")

const {dispatch} = useTasks()
const handleChange = (e) => {
  setInput(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
dispatch(createTask(input))
setInput("")
}

  return (
    <form className="form" type="submit"  onSubmit={handleSubmit} >
<input type="text" placeholder="Buy milk, Go to run, Make pasticcio..." value={input}  onChange={handleChange}/>
<button>Add task</button>
    </form>
  )
}

export default FormTask