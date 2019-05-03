import React from 'react';

class Child1 extends React.Component {
  constructor(){ 
    super();
    this.state ={
      text:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({
      text : e.target.value
    })
  }
  render(){
    return(
      <div>
        <input onChange={this.handleInputChange}/>
        <button onClick={() => this.props.onSubmit(this.state.text)}>
          Submit
        </button>
      </div>
    );
  }
}

class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      text:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newText){
    this.setState({
      text:newText
    })
  }
  render(){
    return(
      <div>
        <h3>{this.state.text}</h3>
        <Child1 onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Parent;

