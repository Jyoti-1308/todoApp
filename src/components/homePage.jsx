import React,{Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import TaskInput from "./taskInput";
class HomePage extends Component{
    state={};
    render(){
        return <div className="container-fluid my-2">
            <h4 className="bg-dark text-white p-2">To-Do App</h4>

           <TaskInput/>
        </div>;
    }
}
export default HomePage;