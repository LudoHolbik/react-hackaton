import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

export default class Task extends React.Component{
   
    
    constructor(props) {
        super(props);


        //set initial state of this component
        this.state = {
            new_task_name: '',   //deafault value - empty string 
       
        }
    }

    formSubmitted(event) {

        event.preventDefault();   // stop the form from actually being submitted
        $.ajax ({
            method: 'post',
            url: 'api/create-task.php',
            data: {                 // where we get data from
                task: this.state.new_task_name,
              
                

            },  
            success: (data) => { // => doesnt need binding
                

                this.setState({
                    new_task_name: '',
                
                });
                
            }
        })


    };


    textChanged(event) {
        this.setState ({
            new_task_name: event.target.value,
           
        })
    }

    
   
    render() {
        return (

            

            <nav className="Leftmenu">

                <h2>Insert Task</h2>

                    <form action="" onSubmit={ (event) => this.formSubmitted(event) }>
                            
                            Task name:
                            <input type="text" name="firstname"  value=
                            { this.state.new_task_name }
                            onChange={ (event) => this.textChanged(event) }/>
                            <br>
                            </br>

                          
                                            
                            <input type="submit" value="Submit"/>
                                                                            
                    </form>

            </nav>          

        )
    }
}