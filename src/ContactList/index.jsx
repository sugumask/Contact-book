import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';
import './styles.css';
import DetailItem from './DetailItem';

class ContactList extends Component{
    constructor()
    {
        super();
        this.state={data:[{
            id:null,
            email:'',
            first_name:'',
            last_name:'',
            avatar:''
        }],view:"list",searchKey:''}
    }

    changeItem=()=>{
        if(this.state.view==='list')
        {
            this.setState({
                view:'details'
            })
        }
        else
        {
            this.setState({
                view:'list'
            })
        }
    }
    searchKey=(e)=>{
        this.setState({
            searchKey:e.target.value
        })
    }
    render(){
        return(
            <Fragment>
                <input type='text' value={this.state.first_name} onChange={this.searchKey} className='search'/>
                <button onClick={this.changeItem} className='change'>CHANGE ITEM</button>                
                {
                    this.state.view==='list'?
                      <div>{this.state.data.filter(item=>item.first_name.includes(this.state.searchKey)||
                      item.last_name.includes(this.state.searchKey)||
                      item.email.includes(this.state.searchKey)).map(item=><ListItem item={item}/>)}
                      </div>
                    :
                    <div className='main'>{this.state.data.filter(item=>item.first_name.includes(this.state.searchKey)||
                        item.last_name.includes(this.state.searchKey)||
                        item.email.includes(this.state.searchKey)).map(item=><DetailItem item={item}/>)}</div>
                }
            </Fragment>
            
        )
    }
    getAll=()=>{
        let apiUrl='https://reqres.in/api/users?page=1';
        fetch(apiUrl)
        .then(response=>response.json()).then(res=>
            
            {
                console.log(res)    
            this.setState({
                data:res.data
            })
            console.log(res)    
        })
        
    }
    componentDidMount(){
        this.getAll()
    }
}

export default ContactList;