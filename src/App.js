import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './searchBox';
import Scroll from './scroll';



class App extends Component {
constructor(){
    super()
    this.state = {
       robots:[],
       searchField:'',
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
    
   
}

onSearchChange = (event)=>{
    this.setState({searchField:event.target.value})  
}

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0) {
           return <h1>LOADING</h1>
        } else {
            return(
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                      <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>   
            );
        }
        
    }
    
}

export default App;