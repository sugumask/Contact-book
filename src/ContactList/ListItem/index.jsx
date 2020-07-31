import React, { Component } from 'react';

class ListItem extends Component{
    render(){
        const{item:{first_name,last_name,email,avatar}}=this.props;
        console.log();
        return(
            <div className='list-item'>
                <img src={avatar}/>
                <div className='user-list'><p>{first_name} {last_name} </p>
                <p>{email}</p>                
                </div>
            </div>

        )
    }
}
export default ListItem;