import React, { Component } from 'react';
import axios from "axios";

class App extends Component{
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
    this.setState({title: event.target.value, description: event.target.value, completed: event.target.value});
  }

  handleSubmit(event){
    axios.post("http://localhost:8000/api/todos/",{title: this.state.title, description: this.state.description, completed: this.state.completed}).then(res => {console.log(res.status)}); 
    event.preventDefault();
  }

  render() {
    return (
     <div>
       <form onSubmit={this.handleSubmit}>
         <label>
           Title : 
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <label>
           Description : 
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <label>
           Completed : 
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     </div> 
    );
  }
}

export default App;