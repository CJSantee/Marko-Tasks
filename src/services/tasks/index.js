import { pool } from "../../config/config";

// Create Task Item
const createTask = (request, response) => {
    const { title, details } = request.body;
    pool.query(
        "SELECT * FROM createTask($1, $2)",
        [title, details],
        (error, result) => {
            if (error) {
                return response.status(400).send(error);
            }
            response.status(201).json(result.rows[0]["createtask"]); // Returns id
        }
    );
};

const getTasks = (request, response) => {
    pool.query("SELECT * FROM getTasks()", (error, result) => {
        if (error) {
            return response.status(400).send(error);
        }
        response.status(200).json(result.rows);
    });
};

const getTask = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("SELECT * FROM getTask($1)", [id], (error, result) => {
        if (error) {
            return response.status(400).send(error);
        }
        response.status(200).json(result.rows);
    });
};

const updateTask = (request, response) => {
    const task = request.body;
    task.id = parseInt(request.params.id);
    pool.query(
        "SELECT * FROM updateTask($1, $2, $3, $4, $5)",
        [task.title, task.details, task.deadline, task.complete, task.id],
        (error, result) => {
            if (error) {
                return response.status(404).send(error);
            }
            response.status(200).send(`Task Item with ID: ${task.id} UPDATED`);
        }
    );
};

const deleteTask = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("SELECT * FROM deleteTask($1)", [id], (error, result) => {
        if (error) {
            return response.status(404).send(error);
        }
        response.status(204).send(`Task Item with ID: ${id} DELETED`);
    });
};

export { createTask, getTasks, getTask, updateTask, deleteTask };
