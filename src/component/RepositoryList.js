import React,{Component} from 'react'
import axios from 'axios';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome'

export default class RepositoryList extends Component{
    constructor(props){
        super(props); 
        this.state={ 
            posts:[] ,
            value:"",
            loading:true,
            count:0
            
            
        }
    
        
    }

    
    getPosts =(value) =>{
        
        axios.get('https://api.github.com/search/repositories?q=language:'+value+'&sort=stars')
       
        .then(response =>{
            
            const data =JSON.parse(JSON.stringify(response.data.items));
            
            const data2 = data.map(d => ({
                id: d.id,
                fork: d.forks_count,
                open_issues: d.open_issues,
                score: d.score,
                stars: d.stargazers_count,
                html_url:d.owner.html_url,
                avatar_url:d.owner.avatar_url,
                name:d.owner.login

            }))
            // console.log(data2)
            this.setState({
                posts : data2.slice(),
                loading:false,
                count:0

            });
        })
    }
   
    render(){
       
       
       const postlist = this.state.posts.map(
        p => (
           
            <div key={p.id} className="card">

                <h4 className="header-lg center-text">#{this.state.count=this.state.count+1}</h4>

                <img src={p.avatar_url}alt="img"className="image"></img>
                <h4 className="header-lg center-text">{p.name}</h4>
                <div className="link">
                <a href={p.html_url} className="link">{p.name}</a><br/>
                </div>

                <div className="text" >
                 
            
                ID:{p.id}  <br/>
                Stars:{p.stars}&nbsp;stars<br/> 
                Fork:{p.fork}&nbsp;forks<br/>
                Open issues:{p.open_issues}&nbsp;open issues<br/>
                Score:{p.score}&nbsp;scores<br/>
            
            
               
                </div>
                </div>
                 

        )
        );
       
       
        
       
        return(
            <div className="container">
                {/* <input type="submit" name="javascript" onClick={this.getPosts} value="java"/> */}
                <button className="btn btn-outline-success"onClick={() => {this.getPosts('javascript')}}>Get javascript</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success"onClick={()=>{this.getPosts('python')} }>Get Python</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success"onClick={()=>{this.getPosts('ruby')}} >Get Ruby</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success"onClick={()=>{this.getPosts('java')}} >Get Java</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-success"onClick={()=>{this.getPosts('css')} }>Get Css</button>&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <button onClick={this.getPosts} >Get Data</button> */}
                {postlist}
                
            <br/>    
            </div>
            

        )
        
       
    }
}