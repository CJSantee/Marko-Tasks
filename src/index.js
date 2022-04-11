import { Router } from "express";
import indexPage from "./pages/index/index";
import tasksPage from "./pages/tasks";
import usersService from "./services/users";

// Tasks API
import {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    updateTask,
} from "./services/tasks";

export default Router()
    .get("/", indexPage)
    .get("/tasks", tasksPage)
    .post("/api/tasks", createTask)
    .get("/api/tasks", getTasks)
    .get("/api/tasks/:id", getTask)
    .patch("/api/tasks/:id", updateTask)
    .delete("/api/tasks/:id", deleteTask)
    .get("/services/users", usersService);
