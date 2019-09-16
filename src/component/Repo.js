import React,{Component} from 'react';
// import '../styles.css'
import RepositoryList from './RepositoryList';

export default class Repo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Github</h1>
    <RepositoryList/>
  </div>
</div>
        )
    }
}