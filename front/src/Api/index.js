export async function senData(newTask) {
  try {
    const data = await fetch("http://localhost:4000/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const res = data.json();
    return res;
  } catch {
    console.log("fail send");
  }
}
export async function getData() {
  try {
    const data = await fetch("http://localhost:4000/api/tasks");

    return await data.json();
  } catch {
    console.log("fail getData");
  }
}
