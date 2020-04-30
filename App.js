import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchTerm:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respone=>respone.json())
    .then(users=>this.setState({monsters:users}))
  }
 handleChange=e=>{
    this.setState({searchTerm:e.target.value})
  }
  render(){
    const {monsters, searchTerm}=this.state;
    const filteredMonsters=monsters.filter(mon=>
      mon.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    return(
      <div className="App">
        <h1>Monsters bolodox</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
