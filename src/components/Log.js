import React from 'react';
import ReactDOM from 'react-dom';


export default class Log extends React.Component{
    render() {
        
        return (

        <tr className="log">
            <td>{this.props.task_name}</td>
            <td>{this.props.name}</td>
            <td>{this.props.text}</td>
            <td>{this.props.duration}</td>
            <td>{this.props.loged_at}</td>
        </tr>
        )
    }
}