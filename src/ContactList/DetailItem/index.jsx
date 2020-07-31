import React, { Component } from 'react';

class DetailItem extends Component{
    render(){
        const{item:{first_name,last_name,email,avatar}}=this.props;
        console.log();
        return(
            <div className='detail-item'>
                <img src={avatar} className='image'/>
                <div><p>{first_name} {last_name} </p>
                <p>{email}</p>                
                </div>
            </div>

        )
    }
}
export default DetailItem;