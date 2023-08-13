import { useDispatch, useSelector } from "react-redux"

const useTasks = () => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()


    return {
        tasks, dispatch
    }
} 


export default useTasks