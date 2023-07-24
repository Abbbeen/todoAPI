import { addNewTask, getTask,editTask,deleteTask } from "../controllers/todoController";
const Routes = (app) => {
    app.route('/task')
    .get(getTask)
    .post(addNewTask);
    app.route("/task/:id")
    .put(editTask)
    .delete(deleteTask)
}

export default Routes;