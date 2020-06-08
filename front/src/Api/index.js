export function senData() {
  fetch("http://localhost:4000/api/tasks", {
    method: "POST",
    body: JSON.stringify(),
  });
}
