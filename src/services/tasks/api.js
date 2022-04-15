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

async function updateTask(data) {
    const res = await fetch(`/api/tasks/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}

async function toggleTask(data) {
    const body = { complete: data.complete };
    const res = await fetch(`/api/tasks/${data.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}

async function deleteTask(_id) {
    const res = await fetch(`/api/tasks/${_id}`, {
        method: "DELETE",
    });
}

export { getTasks, createTask, updateTask, toggleTask, deleteTask };
