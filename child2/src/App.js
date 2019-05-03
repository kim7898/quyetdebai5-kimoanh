import React from 'react';
import "./app.css"
class Child1 extends React.Component {
  constructor(){ 
    super();
    this.state ={
      text:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      text : event.target.value
    })
  }
  render(){
    return(
      <div>
        <input onChange={this.handleInputChange}/>
        <button onClick={() => this.props.onSubmit(this.state.text)}>
         change
        </button>
      </div>
    );
  }
}

class Child2 extends React.Component{
  render(){
    return(
      <div>
        <p className={`text ${this.props.color}`}>{this.props.Text}</p>
      </div>
      
    );
  }
}

class Child2Child extends React.Component{
  constructor(){
    super();
    this.state = {
      text:'',
      color:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newText){
    this.setState({
      text:newText,
      color:'green'
    })
  }
  render(){
    return(
      <div>
        <Child1 onSubmit={this.handleSubmit}/>
        <Child2 Text={this.state.text}/>
        <Child2 color={this.state.color} Text={this.state.text}/>
      </div>
    );
  }
}

export default Child2Child;

