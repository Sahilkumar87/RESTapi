export const addItemServer = async (task, date) => {
    const response = await fetch("http://localhost:3001/api/todo", {
        method: "POST", 
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({task, date}),
    });
    const item = await response.json();

    return mapServerItemLocalItem(item);

}

const mapServerItemLocalItem = (serverItem) => {
    return {
        id: serverItem._id,
        name: serverItem.task,
        dueDate: serverItem.date,
        completed: serverItem.complete,
        createAt: serverItem.createAt,
        updatedAt: serverItem.updatedAt
     };
}