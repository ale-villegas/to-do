import ListOfTasks from "./components/ListOfTasks"
import "../src/App.css"
import { Provider } from 'react-redux'
import { store } from "./store/store"



function App() {


  return (
   
    <Provider store={store}>
       <main>
<ListOfTasks/>
</main>
</Provider>
  
  )
}

export default App
