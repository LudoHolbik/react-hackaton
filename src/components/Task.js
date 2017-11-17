import React from 'react';
import ReactDOM from 'react-dom';


export default class Task extends React.Component{
    render() {
        
        return (

        <tr className="task">
            <td>{this.props.name}</td>
            <td>{this.props.duration}</td>
        </tr>
        )
    }
}