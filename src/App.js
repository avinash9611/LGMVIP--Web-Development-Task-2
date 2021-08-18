import Users from "./card";
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
	super(props)
	this.state = {
    users :([]),
    loading : false                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){

    this.setState({loading: true});

      setTimeout(async function(){
        const response=await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse=await response.json();
        console.log(jsonresponse)
        this.setState({users:jsonresponse["data"],loading:false});
      }.bind(this),1500);
  }
    
  render(){
  return (
    <div className='tc'>
      <h1 className='f2'>Click Below to get users Data</h1><br/>
      <button className="siz" onClick={this.updateState}>Get Users</button>
      <div className="userdatacontainer">
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    </div>
  );
  }
}

export default App;