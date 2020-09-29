import React, { Component } from 'react';
import CardList from './cardlist';
import {robots} from './robot';
import SearchBox from './searchBox'


class App extends Component {
constructor(){
    super()
    this.state = {
       robots: robots,
       searchField:'',
    }
}

onSearchChange = (event)=>{
    this.setState({searchField:event.target.value})  
}

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>   
        );
    }
    
}

export default App;