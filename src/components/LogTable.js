import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Log from './Log';

export default class LogTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            logs: [],

            orderby:'loged_at',
            limit: 10,
            from_friends_only: false,
            current_datetime: null

        }
    }
    
    componentDidMount(){
        this.refreshLogs();
    }
    
    refreshLogs(){
        var self = this;
    
        $.ajax ({
            method: "get",
            url: "api/all-logs.php",
            dataType: "json",
            success: (data) => {
                self.setState({
                    logs: data.logs
                });
            }
        });
    }

    render() {
        let logs = [];
        for(let i in this.state.logs){
            let log_data = this.state.logs[i];
            logs[i] = <Log 
                        key={ log_data.id }
                        name = { log_data.name }
                        text={ log_data.text }
                        task_id = { log_data.task_id }
                        duration = { log_data.duration }
                        loged_at = { log_data.loged_at }
                        task_name = { log_data.task_name }
            />;
        }

        return (
            <div>
                <h3> Last Logs</h3>
                <table className="logtable">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Who?</th>
                            <th>What?</th>
                            <th>How long?</th>
                            <th>Logged_at</th>                    
                        </tr>
                    </thead>
                    <tbody>
                        { logs }                
                    </tbody>

                </table>          
            </div>
        )
    }
}