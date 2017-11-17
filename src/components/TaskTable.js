import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Task from './Task';

export default class LogTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],

            limit: 10,
            from_friends_only: false,
            current_datetime: null

        }
    }
    
    componentDidMount(){
        var self = this;

        $.ajax ({
            method: "get",
            url: "api/all-tasks.php",
            dataType: "json",
            success: (data) => {
                self.setState({
                    tasks: data.tasks
                });
            }
        })
    }

    render() {
        let tasks = [];
        for(let i in this.state.tasks){
            let task_data = this.state.tasks[i];
            tasks[i] = <Task 
                        key={ task_data.id }
                        name = { task_data.name}
                        duration = { task_data.duration}                        
            />;
        }

        return (
            <div>
                <h3> Tasks </h3>
                <table className="tasktable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration</th>                   
                        </tr>
                    </thead>
                    <tbody>
                        { tasks }                
                    </tbody>

                </table>          
            </div>
        )
    }
}