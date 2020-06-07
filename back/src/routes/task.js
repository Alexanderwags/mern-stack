import express from "express";
import Task from "../models/task";
import ServicesTasks from "../services/ServicesTasks";
const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find({});
  console.log(tasks);
  res.json(tasks);
});
router.get("/:id", async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  res.json(tasks);
});
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const newtask = new Task({ title, description });
  await newtask.save();
  res.json({ status: "success" });
});
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    title,
    description,
  };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json("Task update");
});
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json("delete Task");
});

export default router;
