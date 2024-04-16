import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import auth from "./authService";
class ViewTasks extends Component {
    state = {
        task: "",
        
        
    };
   
    handleDelete=(index)=>{
        let s1={...this.state};
        let list=auth.getList();
        list.splice(index,1);
        auth.storeList(list);
        this.setState(s1);
    }
    render() {
     let list=auth.getList();
     console.log(list);
        return <div className="container my-4">
            <h4 className="mx-2">To-Do List</h4>
            {!list.length>0&&<h5 className="mx-2 text-danger">List is empty</h5>}
            {list.length>0&&<div className="row p-1 mx-2 bg-dark text-white w-50">
                <div className="col-10">Item</div>
                <div className="col-2"></div>
                {/* <div className="col-4"></div> */}
            </div>}
            {list.map((ele,index)=><div className="row mx-2 border p-1 w-50 bg-light">
                <div className="col-10">{ele}</div>
                <div className="col-2">
                    <button className="btn btn-sm btn-danger" onClick={()=>this.handleDelete(index)}>Delete</button>
                </div>
                {/* <div className="col-4"></div> */}
            </div>)}
        </div>
    }
}
export default ViewTasks;