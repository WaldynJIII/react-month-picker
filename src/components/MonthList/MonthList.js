import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem'
class MonthList extends Component{






    render(){
        return(
<div>
    <ul>
                {this.props.mList.map(taco => (<MonthItem  key={taco.id} taco={taco} />))}
                </ul>
</div>

        )
    }
}
export default MonthList