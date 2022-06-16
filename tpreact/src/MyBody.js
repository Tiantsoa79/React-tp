import React from "react";
import './App.css';
let data = [
    { name: "Anom", age: 34, office: "Male", position: "architect", start : "2011/04/25", salary : "$320.0" },
    {name: "Orteg", age: 53, office: "Male", position: "accountant", start : "2009/04/12", salary : "$120.0"  },
    { name: "Zulich", age: 73, office: "female", position: "technical author", start : "2010/03/09", salary : "$520.0" },
    { name: "Mev", age: 20, office: "Male", position: "junior technical author", start : "2015/12/02", salary : "$720.0" },
    {name: "Kar", age: 34, office: "female", position: "senior dev", start : "2011/04/05", salary : "$220.0"  },
    { name: "Ilo", age: 45, office: "female", position: "seller", start : "2007/05/25", salary : "$320.0" },
    { name: "Jean", age: 38, office: "Male", position: "specialist data", start : "2002/04/20", salary : "$350.0" },
    {name: "Refs", age: 32, office: "female", position: "java dev", start : "2008/06/19", salary : "$1320.0"  },
    { name: "Mil", age: 60, office: "Male", position: "python dev", start : "2000/04/02", salary : "$920.0" },
    { name: "Chus", age: 28, office: "female", position: "back end", start : "2006/10/25", salary : "$820.0" }
  ]

export default class MyBody extends React.Component {
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
  
      cliquer(e){
          e.preventDefault()
      }
      

      render(){
          return(
              <>
              <div className="tablePage">
                  <div className="leftPart">
                      <br></br>
                      <p><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a a1">CORE</a></p>
                      <h5><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a">Dashboard</a> </h5>
                      <p><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a a1">INTERFACE</a> </p>
                      <h5><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a">Layouts</a></h5>
                      <h5>  <a href="googgle.com" onClick={this.cliquer.bind(this)} className="a">Pages</a></h5>
                      <p><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a a1" >ADDONS</a> </p>
                      <h5><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a">Charts</a></h5>
                      <h5><a href="googgle.com" onClick={this.cliquer.bind(this)} className="a">Tables</a> </h5>
                      <h5 className="footLeft"> Logged in as : <br></br> Start Bootstrap</h5>
                  </div>
                  <div className="rightPart">
                     <h2>Tables</h2>
                    <div> <a href="googgle.com" onClick={this.cliquer.bind(this)}>Datagrip</a> <span> / Tables</span> </div>
                    <br></br>
                    <div className="boxed">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a href="googgle.com" onClick={this.cliquer.bind(this)}> official DataTables documentation</a>. </div>
                  <br></br>
                  <div className="boxedTwo">  DataTable Example</div>
                  <div className="boxed3">
                      <div>10 entries per page</div>
                      <div><input type="text" value={this.state.value} onChange={this.handleChange}  placeholder="search.." className="textBouton2"/></div>
              </div>
    <div>
    <div className="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.position}</td>
              <td>{val.office}</td>
              <td>{val.age}</td>
              <td>{val.start}</td>
              <td>{val.salary}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </div>
    <div className="boxedFour"> 
    <div> Showing 1 to 57 entries</div>
    <div>
        <input type="submit" value="1" className="bouton2" /><input type="submit" value="2" className="bouton2" /><input type="submit" value="3" className="bouton2" /><input type="submit" value="4" className="bouton2" /><input type="submit" value="5" className="bouton2" /><input type="submit" value="6" className="bouton2" /></div>
    </div>
                  </div>
              </div>
              </>
          )
      }
}