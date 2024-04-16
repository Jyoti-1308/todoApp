import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import auth from "./authService";
import ViewTasks from "./viewTasks";
class TaskInput extends Component {
    state = {
        task: "",
        list: [],
        view: 0,
        taskList: []
    };
    handleSubmit = (e) => {
        e.preventDefault();

        let s1 = { ...this.state };
        let list = auth.getList();
        if (!list) {
            list = [];
        }
        list.push(s1.task);
        s1.list = list;
        console.log("done adding items");
        auth.storeList(s1.list);
        s1.task = "";
        this.setState(s1);
    }
    handleChange = (e) => {
        e.preventDefault();

        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.task = input.value;
        s1.view = 0;
        this.setState(s1);
    }
    handleView = (e) => {
        e.preventDefault();
        let s1 = { ...this.state };
        s1.view = 1;

        this.setState(s1);
    }

    render() {
        let { task, view, taskList } = this.state;

        console.log(taskList);
        return <React.Fragment>
            <div className="row px-3">
                <h5>Create a to-do list to keep track of things</h5>
                <div className="col-3">
                    <input type="text"
                        id="task"
                        name="task"
                        value={task}
                        onChange={this.handleChange}
                        className="form-control"
                        // onSubmit={this.handleSubmit}
                        placeholder="Enter a new ToDo task "
                        required />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Add Task</button>
                </div>
                <div className="col-7">
                    <button className="btn btn-primary" onClick={this.handleView}>View Tasks</button>

                </div>
                {view > 0 && <ViewTasks />}
            </div>
        </React.Fragment>
    }
}
export default TaskInput;