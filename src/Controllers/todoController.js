import mongoose from "mongoose";
import { newTaskSchem } from "../Models/todeModel";

const Task = mongoose.model("Task", newTaskSchem);

export const addNewTask = (req, res) => {
  let newTask = new Task(req.body);
  newTask
    .save()
    .then(() => {
      res.send("saved successfully");
    })
    .catch((err) => {
      res.send("error occured", err);
    });
};

export const getTask = (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.send("error occured", err);
    });
};

export const editTask = (req, res) => {
  Task.findOneAndUpdate({ taskId: req.params.id }, req.body, {
    new: true,
    useFindAndModify:false
  }).then(()=>{
    res.send("edited successfully")
  }).catch((err)=>{
    res.send("error occured", err);
  })
};


export const deleteTask=(req,res)=>{
    Task.deleteMany({taskId:req.params.id}).then((result)=>{
        if(result.deletedCount===0){
            return res.status(404).send('task not found')
        }
        res.send("deleted successfully");
    })
}
