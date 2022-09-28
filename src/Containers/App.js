import React from "react";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import './app.css'
import Searchbox from "../Components/Searchbox";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      robots10 : [],
      searcharea :  ""
    }
  }

  onSearchChange= (event) => {
    this.setState({searcharea:event.target.value})
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
      this.setState({robots10:data})
    })
  }
  
  render(){
    const final=this.state.robots10.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searcharea.toLowerCase())
    })      
    return(
        <div className="tc">
        <h1 className="fs1">ROBOFRIENDS</h1>
        <Searchbox search2 = {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
        <CardList robots10 = {final}/>
        </ErrorBoundary>
        </Scroll>
      </div>
    )
}
}
export default App