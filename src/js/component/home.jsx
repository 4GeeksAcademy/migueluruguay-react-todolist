import React, { useState } from "react";

// Componente principal de la lista de tareas
const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Función para agregar una nueva tarea
    const addTask = (e) => {
        if (e.key === "Enter" && newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    // Función para eliminar una tarea
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="text-center mt-5">
            <h1 className="mb-4">Lista de Tareas</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                className="form-control"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={addTask}
                aria-label="New task input"  // Etiqueta accesible para describir el input
            />
            <ul className="list-group mt-3">
                {tasks.length === 0 ? (
                    <li className="list-group-item text-muted">
                        No hay tareas, añadir tareas
                    </li>
                ) : (
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {task}
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteTask(index)}
                                aria-label={`Delete task: ${task}`}  // Etiqueta accesible para los botones de eliminar
                            >
                                X
                            </button>
                        </li>
                    ))
                )}
            </ul>
            <p className="mt-3">{tasks.length} item{tasks.length !== 1 ? "s" : ""} left</p>
        </div>
    );
};

export default Home;
