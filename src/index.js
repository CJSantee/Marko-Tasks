import { Router } from "express";
import tasksPage from "./pages/tasks";

// Tasks API
import {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    toggleTask,
    updateTask,
} from "./services/tasks";

export default Router()
    .get("/tasks", tasksPage)
    .post("/api/tasks", createTask)
    .get("/api/tasks", getTasks)
    .get("/api/tasks/:id", getTask)
    .patch("/api/tasks/:id", toggleTask)
    .delete("/api/tasks/:id", deleteTask);
