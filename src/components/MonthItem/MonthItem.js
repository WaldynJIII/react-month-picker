import React, { Component } from 'react';
class MonthItem extends Component{

doPick=()=>{
    let yeeted = this.props.taco.name
    this.props.yeetPick(yeeted)
}




    render(){
        return (
            <div>
<li onClick={this.doPick}>{this.props.taco.name}</li>
            </div>

        )
    }
}
export default MonthItem