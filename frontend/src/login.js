import React, { Component } from 'react';
import axios from "axios";
import { Link, useHistory, withRouter } from "react-router-dom";

class login extends Component{

    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          completed: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event){
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event){
        //axios.post("http://localhost:8000/api/login/",{title: this.state.title, description: this.state.description, completed: this.state.completed}).then(res => {console.log(res.status)});
        alert("haahha");
        event.preventDefault();
      }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit} >
                <label>
                Title : 
                <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                Description : 
                <input name="description" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                Completed : 
                <input name="completed" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <Link to="/dashboard" className="btn btn-primary">LOG IN</Link>
            </form>
            </div>
        );
    }
}

export default withRouter(login);