import React from "react";
import './App.css';

export default class MyNav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('recherche : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div  className="nav">
         <span > Start Bootstrap</span>
         <span className="searchnav" >
           <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}  placeholder="search.." className="textBouton"/>
          <input type="submit" value="search" className="bouton" />
          </form>
          </span>
        </div>
      );
    }
  }