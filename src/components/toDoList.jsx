import { useState } from "react";

const ToDoList = () => {
    
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {

    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }


    
    return <>
    
    <h1>TO-DO-List</h1>
    <div>
        <input type="text" placeholder="Enter A task" value={newTask} onChange={} />
    </div>
    
    </>
}

export default ToDoList;