import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry';
import Loader from 'react-loader-spinner';

import { setSearchField } from '../action';

const mapStateToProps = state => {
    return {
      searchField : state.searchField
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
       onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
constructor(){
    super()
    this.state = {
       robots:[]
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));  
}


    render() {
        const {robots} = this.state;
        const {searchField,onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length) {
           return (
              <div style = {{display: "flex" ,marginTop: "20%",justifyContent:"center" , alignItems: "center"}}>
                  <Loader type="ThreeDots" color="green" height="100" width="100" />
              </div>
           )
           
        } else {
            return(
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                      <ErrorBoundry>
                       <CardList robots={filteredRobots}/>
                      </ErrorBoundry>
                    </Scroll>
                </div>   
            );
        }     
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(App);