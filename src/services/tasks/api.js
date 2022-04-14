async function getTasks() {
    const res = await fetch("/api/tasks");
    return await res.json();
}

async function createTask(data) {
    const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}

async function deleteTask(_id) {
    const res = await fetch(`/api/tasks/${_id}`, {
        method: "DELETE",
    });
}

export { getTasks, createTask, deleteTask };
