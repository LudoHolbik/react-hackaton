import React from 'react';
import ReactDOM from 'react-dom';


export default class LogTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            logs: [],

            orderby:'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null

        }
    }
    
    // componentDidMount() {

    //    this.refreshLogs();
    // }

    // refreshLogs() {

    //     $.ajax ({
    //         method: 'get',
    //         url: 'api/all-logs.php',
    //         dataType: 'json',
    //         success: (data) => {
                
    //             console.log(data);
    //             this.setState({
    //                 logs: data.logs
    //             });
    //         }
    //     })  

    // }

    // newLogWasAdded(){
        
    //     this.refreshLogs();
    //     this.props.logWasAdded();
    // }

    render() {
        return (
           
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
                    <tr>
                        <td rowSpan="2">Toilet Services</td>
                        <td>Job Jobs</td>
                        <td>Cleaned toilet</td>
                        <td>5 mins</td>
                        <td>12/02/2017</td>
                    </tr>
                    <tr>
                        <td>Juan Carlos</td>
                        <td>Messed up toilet</td>
                        <td>1 mins</td>
                        <td>12/02/2017</td>
                    </tr>
                </tbody>

            </table>          

        )
    }
}